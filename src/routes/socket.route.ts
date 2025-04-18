import { Server, Socket } from 'socket.io';

import jwt from 'jsonwebtoken';
import Config from 'src/config/env.js';
import prisma from 'src/repositories/client.js';
import { assert } from 'console';

interface AuthPayload {
    auth: { token: string };
}


interface ChatMessageDTO {
    id: string;
    content: string;
    from: string;
    fromId: string;
    isPrivate: boolean;
    to: string;
    toId: string;
    timestamp: Date;
    image?: string;
    reactions: Record<string, Array<{
        id: string;
        name: string;
        timestamp: number;
      }>>;
	edited?: boolean;
	editedBy?: string;
}

interface ChatMessageModel {
    id: string;
    content: string;
    senderId: string;
    recipientUserId?: string;
    recipientGroupId?: string;
    timestamp: Date;
}

interface ChatGroup {
    id: string;
    name: string;
    members: string[];
    memberIds: string[];
    creator?: string;
    creatorId?: string;
    lastMessage?: {
        content: string;
        timestamp: number;
    };
    lastMessageSender?: string;
}

interface UserType {
    id: string;
    name: string;
    socketId?: string;
}

const Users = new Map<string, UserType>(); // Map<userId, User>
const onlineUsers = new Map<string, UserType>();
const offlineUsers = new Map<string, UserType>();
const groups = new Map<string, ChatGroup>();
function getOnlineUsersArray() {
    return Array.from(onlineUsers.values()).map((user) => ({
        id: user.id,
        name: user.name,
    }));
}

function getOfflineUsersArray() {
    return Array.from(offlineUsers.values()).map((user) => ({
        id: user.id,
        name: user.name,
    }));
}

function getGroupsArray() {
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
                    sender : {
                        select: {
                            name: true,
                        }},
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
        });

        offlineUsers.set(user.id, {
            id: user.id,
            name: user.name,
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
    console.log('Offline Users:', offlineUsers);
    console.log('Groups:', groups);
})();

export default function registerSocket(io: Server) {
    io.use(async (socket, next) => {
        const { token } = socket.handshake.auth as AuthPayload['auth'];
        if (!token) {
            console.log('Authentication token missing.');
            return next(new Error('Authentication token missing.'));
        }

        // TODO: Verify token and attach user info to socket
        // Example: socket.data.user = await verifyToken(token);
        const data = jwt.verify(token, Config.JWT_SECRET) as { id: string };

        if (!data) {
            return next(new Error('Invalid token.'));
        }
        socket.data.user = await prisma.user.findUnique({
            where: { id: data.id as string },
            select: { id: true, name: true },
        });

        // Fetch initial groups for the user

        const userJoinedGroups = await prisma.group.findMany({
            where: {
                members: {
                    some: {
                        id: data.id,
                    },
                },
            },
            select: {
                id: true,
                lastMessage: {
                    select: {
                        id: true,
                        content: true,
                        sender : {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        timestamp: true,
                    },
                },
            },
        });

        // Fetch the last message from 5 people this user has messaged with
        // Get the last message exchanged with each of 5 distinct users
        const recentContacts = await prisma.$queryRaw`
        `;
        console.log('Recent Contacts:', recentContacts);

        // Send the recent contacts data to the client
        //socket.emit('recentContacts', recentContacts);

        // // Also fetch last messages for each group the user is in
        // const groupLastMessages = await Promise.all(
        //     userJoinedGroups.map(async (group) => {
        //         const lastMessage = await prisma.message.findFirst({
        //             where: { recipientGroupId: group.id },
        //             orderBy: { timestamp: 'desc' },
        //             select: { content: true, timestamp: true }
        //         });

        //         return {
        //             groupId: group.id,
        //             lastMessage: lastMessage ? {
        //                 content: lastMessage.content,
        //                 timestamp: lastMessage.timestamp.getTime()
        //             } : null
        //         };
        //     })
        // );

        // socket.emit('groupsActivity', groupLastMessages);

        // Store these recent contacts in socket data for quick access
        //socket.data.recentContacts = recentContacts;

        // const groupLastMessages = await Promise.all(
        //     userJoinedGroups.map(async (group) => {
        //         const lastMessage = await prisma.message.findFirst({
        //             where: { recipientGroupId: group.id },
        //             orderBy: { timestamp: 'desc' },
        //             select: { content: true, timestamp: true },
        //         });
        //         return {
        //             groupId: group.id,
        //             lastMessage: lastMessage
        //                 ? {
        //                       content: lastMessage.content,
        //                       timestamp: lastMessage.timestamp.getTime(),
        //                     }
        //                 : null,
        //         };
        //     }),
        // );

        socket.join(userJoinedGroups.map((group) => group.id)); // Join all groups the user is a member of

        // socket.data.user = { name: "PlaceholderUser" }; // temporary mock
        next();
    });

    io.on('connection', (socket: Socket) => {
        const username = socket.data.user?.name || 'Anonymous';
        const userId = socket.data.user?.id || 'UnknownUserId';
        offlineUsers.delete(userId);
        onlineUsers.set(userId, {
            id: userId,
            name: username,
            socketId: socket.id,
        });
        console.log(`User connected: ${username} (${userId})`, socket.id);

        // Emit updated client list
        io.emit('clients', getOnlineUsersArray());
        io.emit('offlineClients', getOfflineUsersArray());
        io.emit('groups', getGroupsArray());

        // Handle disconnect
        socket.on('disconnect', (reason) => {
            console.log(`${username} disconnected: ${reason}`);
            // TODO: Update user status, notify others, etc.

            onlineUsers.delete(userId);
            offlineUsers.set(userId, {
                id: userId,
                name: username,
            });

            // Emit updated client list
            io.emit('clients', getOnlineUsersArray());
            io.emit('offlineClients', getOfflineUsersArray());
        });

        // updateClient
        socket.on('updateClient', async (client: { name: string; id: string }) => {
            // TODO: Update user's name in the system/database
            await prisma.user.update({
                where: { id: client.id },
                data: { name: client.name },
            });

            onlineUsers.set(userId, {
                id: userId,
                name: client.name,
                socketId: socket.id,
            });

            // io.emit('clients', onlineUsers);
            io.emit('clients', getOnlineUsersArray());
        });

        // fetchMessages
        socket.on(
            'fetchMessages',
            async ({
                target,
                type,
                limit,
                before,
            }: {
                target: string;
                type: string;
                limit: string;
                before?: number;
            }) => {
                const senderId = userId;

                let whereCondition;
                if (type === 'private') {
                    const recipientUserId = target;
                    whereCondition = {
                        OR: [
                            { senderId, recipientUserId },
                            {
                                senderId: recipientUserId,
                                recipientUserId: senderId,
                            },
                        ],
                    };
                } else {
                    const recipientGroupId = target;
                    whereCondition = {
                        recipientGroupId,
                    };
                }
                whereCondition = {
                    ...(before && {
                        timestamp: { lt: new Date(before) },
                    }),
                };

                try {
                    const messages = await prisma.message.findMany({
                        where: whereCondition,
                        // Add a limit, e.g., 50 messages
                        orderBy: {
                            timestamp: 'desc', // Optional: order messages by time
                        },
                        take: parseInt(limit),
                    });
                    // Reverse the order to ascending for the client
                    messages.reverse();

                    // Can't use async operations directly in map, need to use Promise.all
                    const messagePromises = messages.map(async (message) => {
                        const reactionsData = await prisma.reaction.findMany({
                            where: {
                                messageId: message.id
                            },
                            select: {
                                emoji: true,
                                user: {
                                    select: {
                                        id: true,
                                        name: true,
                                    },
                                },
                                updatedAt: true,
                            },
                        });

                        // Group reactions by emoji
                        const reactions = reactionsData.reduce((acc: Record<string, Array<{ id: string; name: string; timestamp: number }>>, reaction) => {
                            const emoji = reaction.emoji;
                            if (!acc[emoji]) {
                                acc[emoji] = [];
                            }
                            acc[emoji].push({
                                id: reaction.user.id,
                                name: reaction.user.name,
                                timestamp: reaction.updatedAt.getTime(),
                            });
                            return acc;
                        }, {});

                        return {
                            id: message.id,
                            content: message.content,
                            from: Users.get(message.senderId)?.name || 'Unknown User',
                            fromId: message.senderId,
                            to: type === 'private' ? Users.get(message.recipientUserId!)?.name || 'Unknown User' : groups.get(message.recipientGroupId!)?.name || 'Unknown Group',
                            toId: type === 'private' ? message.recipientUserId || '' : message.recipientGroupId || '',
                            isPrivate: type === 'private',
                            timestamp: message.timestamp,
                            image: '',
                            edited: message.edited,
                            reactions
                        };
                    });

                    const formattedMessages: ChatMessageDTO[] = await Promise.all(messagePromises);
                    const response = {
                        messages: formattedMessages,
                        hasMore: formattedMessages.length === parseInt(limit),
                    };
                    console.log('Fetched messages:', response);
                    socket.emit('messagesFetched', response);
                } catch (error) {
                    console.error('Error fetching messages:', error);
                    // Optionally emit an error event back to the client
                    socket.emit('messageFetchError', {
                        message: 'Failed to fetch messages.',
                    });
                }
            },
        );

        // createGroup
        socket.on('createGroup', async (newGroup: ChatGroup) => {
            // TODO: Create group in DB and add creator as a member
            await prisma.group.create({
                data: {
                    id: newGroup.id,
                    name: newGroup.name,
                    members: {
                        connect: { id: userId },
                    },
                    creatorId: userId,
                },
            });
            socket.join(newGroup.id); // Join the group room
            groups.set(newGroup.id, newGroup);
            io.emit('groups', getGroupsArray());
        });

        // joinGroup
        socket.on(
            'joinGroup',
            async ({
                groupId,
                groupName,
                clientId,
                client,
            }: {
                groupId: string;
                groupName: string;
                clientId: string;
                client: string;
            }) => {
                // TODO: Add client to group in DB
                await prisma.group.update({
                    where: { id: groupId },
                    data: {
                        members: {
                            connect: { id: clientId },
                        },
                    },
                });

                const group = groups.get(groupId);
                if (group) {
                    group.members.push(client);
                    group.memberIds.push(clientId);
                } else {
                    console.log('Group not found');
                    return;
                }
                groups.set(groupId, group);

                socket.join(groupId); // Join the group room
                io.emit('groups', getGroupsArray());
            },
        );

        // leaveGroup
        socket.on(
            'leaveGroup',
            async ({
                groupId,
                groupName,
                clientId,
                client,
            }: {
                groupId: string;
                groupName: string;
                clientId: string;
                client: string;
            }) => {
                // TODO: Remove client from group in DB
                const group = groups.get(groupId);
                if (group) {
                    group.members = group.members.filter((member) => member !== client);
                    group.memberIds = group.memberIds.filter((id) => id !== clientId);
                } else {
                    console.log('Group not found');
                    return;
                }
                groups.set(groupId, group);
                await prisma.group.update({
                    where: { id: groupId },
                    data: {
                        members: {
                            disconnect: { id: clientId },
                        },
                    },
                });
                socket.leave(groupName); // Leave the group room
                io.emit('groups', getGroupsArray());
            },
        );

        // deleteGroup
        socket.on('deleteGroup', async ({ groupId }: { groupId: string; groupName: string; clientId: string }) => {
            groups.delete(groupId);
            await prisma.group.delete({
                where: { id: groupId },
            });
            socket.leave(groupId); // Leave the group room
            io.emit('groups', getGroupsArray());
        });

        // renameGroup
        socket.on(
            'renameGroup',
            async ({ groupId, newName, clientId }: { groupId: string; newName: string; clientId: string }) => {
                const group = groups.get(groupId);
                if (group && group.creatorId == clientId) {
                    group.name = newName;
                    groups.set(groupId, group);
                }
                await prisma.group.update({
                    where: { id: groupId },
                    data: { name: newName },
                });
                io.emit('groupRenamed', { groupId, newName });
            },
        );

        // groupMessage
        socket.on('groupMessage', async (msg: ChatMessageDTO) => {
            // TODO: Store group message in DB and emit to group members
            await prisma.message.create({
                data: {
                    id: msg.id,
                    content: msg.content,
                    senderId: msg.fromId,
                    recipientGroupId: msg.toId,
                    timestamp: new Date(msg.timestamp),
                },
            });

            await prisma.group.update({
                where: { id: msg.toId },
                data: {
                    lastMessage: {
                        connect: { id: msg.id },
                    },
                },
            });

            const group = groups.get(msg.toId);
            if (group) {
                group.lastMessage = {
                    content: msg.content,
                    timestamp: new Date(msg.timestamp).getTime(),
                };
                group.lastMessageSender = msg.from;
                groups.set(msg.toId, group);
            }
            
            console.log('Group message:', msg);
            socket.to(msg.toId!).emit('messageReceived', msg);
        });

        // privateMessage
        socket.on('privateMessage', async (msg: ChatMessageDTO) => {
            // TODO: Store private message in DB and send to recipient
            await prisma.message.create({
                data: {
                    id: msg.id,
                    content: msg.content,
                    senderId: msg.fromId,
                    recipientUserId: msg.toId,
                    timestamp: new Date(msg.timestamp),
                },
            });

            // First find the existing chat if any
            const existingChat = await prisma.privateChat.findFirst({
                where: {
                    OR: [
                        {
                            AND: [
                                { initiatorId: msg.fromId },
                                { recipientId: msg.toId }
                            ]
                        },
                        {
                            AND: [
                                { initiatorId: msg.toId },
                                { recipientId: msg.fromId }
                            ]
                        }
                    ]
                }
            });

            await prisma.privateChat.upsert({
                where: {
                    // Use the compound unique identifier if existing, otherwise create new
                    initiatorId_recipientId: existingChat
                        ? { initiatorId: existingChat.initiatorId, recipientId: existingChat.recipientId }
                        : { initiatorId: msg.fromId, recipientId: msg.toId }
                },
                update: {
                    lastMessage: {
                        connect: { id: msg.id },
                    },
                },
                create: {
                    initiator: {
                        connect: { id: msg.fromId },
                    },
                    recipient: {
                        connect: { id: msg.toId },
                    },
                    lastMessage: {
                        connect: { id: msg.id },
                    },
                },

            })

            io.to(onlineUsers.get(msg.toId!)?.socketId!).emit('messageReceived', msg);
        });

        // editMessage
        socket.on('editMessage', async ({ messageId, newContent }: { messageId: string; newContent: string }) => {
            // TODO: Update message in DB and emit to affected clients
            await prisma.message.update({
                where: { id: messageId },
                data: {
                    content: newContent,
                    edited: true,
                },
            });
            io.emit('messageEdited', { messageId, newContent });
        });

        // fetchRecentMessages
        socket.on('fetchRecentMessages' , async () => {
            const recentMessages = await prisma.privateChat.findMany({
                where: {
                    OR: [
                        { initiatorId: userId },
                        { recipientId: userId }
                    ]
                },
                select: {
                    lastMessage: {
                        select: {
                            id: true,
                            content: true,
                            timestamp: true,
                            sender : {
                                select: {
                                    id: true,
                                    name: true,
                                }},
                            recipientUser: {
                                select: {
                                    id: true,
                                    name: true, 
                                }
                            }
                        }
                    },
                    initiator: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    recipient: {
                        select: {
                            id: true,
                            name: true,
                        }
                    }
                }
            });
            const chats: Record<string, any> = {};

            recentMessages.forEach((chat) => {
                const lastMessage = chat.lastMessage;
                const otherUserId = chat.initiator.id === userId ? chat.recipient.id : chat.initiator.id;
                if (lastMessage && lastMessage.recipientUser) {
                    chats[otherUserId] = {
                        id: lastMessage.id,
                        content: lastMessage.content,
                        from: lastMessage.sender.name,
                        fromId: lastMessage.sender.id,
                        to: lastMessage.recipientUser.name,
                        toId: lastMessage.recipientUser.id,
                        isPrivate: true,
                        timestamp: lastMessage.timestamp,
                    };
                }
            });
            socket.emit('recentMessages', {chats});
        })

        // reactToMessage
        socket.on(
            'reactToMessage',
            async({
                messageId,
                toId,
                reaction,
                previousReaction,
            }: { messageId: string; toId:string; reaction: string; previousReaction: string | null ;}) => {
                // TODO: Update message reactions in DB and emit to affected clients
                const socketId = onlineUsers.get(toId)?.socketId;
                let to = toId;
                if (socketId) {
                    to = socketId;
                }

                await prisma.reaction.upsert({
                    where: {
                        userId_messageId: {
                            userId,
                            messageId,
                        },
                    },
                    update: {
                        emoji :reaction,
                    },
                    create: {
                        messageId,
                        userId,
                        emoji : reaction,
                    },
                });

                socket.to(to).emit('messageReacted',{  
                    messageId,
                    reaction,
                    reactedBy: { 
                      id: userId,
                      name: username,
                      timestamp: new Date().getTime(),
                    },
                    previousReaction
                  });
            },
        );

        // // Server-emitted events (examples):
        // io.emit('clients', onlineUsers.keys); // TODO: Send updated client list
        // // io.emit("groups", [...]); // TODO: Send updated group list
        socket.onAny((event, ...args) => {
            console.log(`Event: ${event}`, args);
            // Handle other events here
        });
    });
}
