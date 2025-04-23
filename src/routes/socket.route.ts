import { Server, Socket } from 'socket.io';
import registerGroupHandlers from '../controllers/socket/groupController.js';
import registerMessageHandlers from '../controllers/socket/messageController.js';
import registerUserHandlers from '../controllers/socket/userController.js';

import jwt from 'jsonwebtoken';
import Config from '../config/env.js';
import prisma from '../repositories/client.js';
import { ChatGroup, UserType } from '../types/types.js';

interface AuthPayload {
    auth: { token: string };
}

export const Users = new Map<string, UserType>();
export const groups = new Map<string, ChatGroup>();
export function getOnlineUsersArray() {
    const onlineUsers = Array.from(Users.values()).filter((user) => user.online);
    return onlineUsers.map((user) => ({
        id: user.id,
        name: user.name,
    }));
}

export function getOfflineUsersArray() {
    const offlineUsers = Array.from(Users.values()).filter((user) => !user.online);
    return offlineUsers.map((user) => ({
        id: user.id,
        name: user.name,
    }));
}

export function getGroupsArray() {
    return Array.from(groups.values()).map((group) => ({
        id: group.id,
        name: group.name,
        members: group.members,
        memberIds: group.memberIds,
        creator: group.creator,
        creatorId: group.creatorId,
        lastMessage: group.lastMessage,
        lastMessageSender: group.lastMessageSender,
    }));
}

(async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
        },
    });

    const userGroups = await prisma.group.findMany({
        select: {
            id: true,
            name: true,
            members: {
                select: {
                    id: true,
                    name: true,
                },
            },
            creator: {
                select: {
                    id: true,
                    name: true,
                },
            },
            lastMessage: {
                select: {
                    sender: {
                        select: {
                            name: true,
                        },
                    },
                    content: true,
                    timestamp: true,
                },
            },
        },
    });

    users.forEach((user) => {
        Users.set(user.id, {
            id: user.id,
            name: user.name,
            online: false,
        });
    });

    userGroups.forEach((group) => {
        groups.set(group.id, {
            id: group.id,
            name: group.name,
            members: group.members.map((member) => member.name),
            memberIds: group.members.map((member) => member.id),
            creator: group.creator?.name,
            creatorId: group.creator?.id,
            lastMessage: group.lastMessage
                ? {
                      content: group.lastMessage.content,
                      timestamp: group.lastMessage.timestamp.getTime(),
                  }
                : undefined,
            lastMessageSender: group.lastMessage?.sender.name,
        });
    });

    console.log('Starting socket server...');
})();

export default function registerSocket(io: Server) {
    io.use(async (socket, next) => {
        const { token } = socket.handshake.auth as AuthPayload['auth'];
        if (!token) {
            console.log('Authentication token missing.');
            return next(new Error('Authentication token missing.'));
        }

        // TODO: Verify token and attach user info to Socket
        try {
            const decoded = jwt.verify(token, Config.JWT_SECRET) as { id: string };
            socket.data.user = await prisma.user.findUnique({
                where: { id: decoded.id },
                select: { id: true, name: true },
            });

            const userJoinedGroups = await prisma.group.findMany({
                where: {
                    members: {
                        some: {
                            id: decoded.id,
                        },
                    },
                },
                select: {
                    id: true,
                }
            });
    
            // Join all groups the user is a member of
            socket.join(userJoinedGroups.map((group) => group.id));
            console.log(groups)
            console.log(`User ${socket.data.user.name} joined groups: ${userJoinedGroups.map((group) => group.id).join(', ')}`);
            next();
        } catch (err) {
            console.log('Invalid token:', err);
            return next(new Error('Invalid token.'));
        }
    });

    io.on('connection', (socket: Socket) => {
        const username = socket.data.user?.name || 'Anonymous';
        const userId = socket.data.user?.id || 'UnknownUserId';
        Users.set(userId, {
            id: userId,
            name: username,
            socketId: socket.id,
            online: true,
        });
        console.log(`connected: \x1b[32m${username}`);

        // Emit updated client list
        io.emit('clients', getOnlineUsersArray());
        io.emit('offlineClients', getOfflineUsersArray());
        io.emit('groups', getGroupsArray());

        // Handle disconnect
        socket.on('disconnect', (reason) => {
            console.log(`${username} disconnected: ${reason}`);
            // TODO: Update user status, notify others, etc.

            Users.set(userId, {
                id: userId,
                name: username,
                socketId: undefined,
                online: false,
            });

            // Emit updated client list
            io.emit('clients', getOnlineUsersArray());
            io.emit('offlineClients', getOfflineUsersArray());
        });

        registerGroupHandlers(io, socket, userId);
        registerMessageHandlers(io, socket, userId);
        registerUserHandlers(io, socket, userId);

        // Server-emitted events (examples):
        // io.emit('clients', onlineUsers.keys); // TODO: Send updated client list
        // // io.emit("groups", [...]); // TODO: Send updated group list
        socket.onAny((event) => {
            const green = '\x1b[32m';
            const red = '\x1b[31m';
            const reset = '\x1b[0m';
            
            console.log(`👤 ${green}User${reset}: ${username}  🎉 ${red}Event${reset}: ${event}`);
        });
    });
}
