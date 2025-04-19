import { Server, Socket } from 'socket.io';
import prisma from '../../repositories/client.js';
import { getOnlineUsersArray, Users } from '../../routes/socket.route.js';
import { ChatMessageDTO } from '../../types/types.js';

export default function registerUserHandlers(io: Server, socket: Socket, userId: string) {
    // updateClient
    socket.on('updateClient', async (client: { name: string; id: string }) => {
        // TODO: Update user's name in the system/database
        await prisma.user.update({
            where: { id: client.id },
            data: { name: client.name },
        });

        Users.set(userId, {
            id: userId,
            name: client.name,
            socketId: socket.id,
            online: true,
        });
        io.emit('clients', getOnlineUsersArray());
    });

    // fetchRecentMessages
    socket.on('fetchRecentMessages', async () => {
        const recentMessages = await prisma.privateChat.findMany({
            where: {
                OR: [{ initiatorId: userId }, { recipientId: userId }],
            },
            select: {
                lastMessage: {
                    select: {
                        id: true,
                        content: true,
                        timestamp: true,
                        sender: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                        recipientUser: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
                initiator: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                recipient: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        const chats: Record<string, ChatMessageDTO> = {};

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
                    timestamp: lastMessage.timestamp.getTime(),
                    reactions: {}
                };
            }
        });
        socket.emit('recentMessages', { chats });
    });
}
