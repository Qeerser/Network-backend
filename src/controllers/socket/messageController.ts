import { Server, Socket } from 'socket.io';
import prisma from '../../repositories/client.js';
import { groups, Users } from '../../routes/socket.route.js';
import { ChatMessageDTO } from '../../types/types.js';
export default function registerMessageHandlers(io: Server, socket: Socket, userId: string) {
    // fetchMessages
    socket.on('fetchMessages', async ({ target, type, limit, before }: { target: string; type: string; limit: string; before?: number }) => {
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
            ...whereCondition,
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
                        messageId: message.id,
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
                    to:
                        type === 'private'
                            ? Users.get(message.recipientUserId!)?.name || 'Unknown User'
                            : groups.get(message.recipientGroupId!)?.name || 'Unknown Group',
                    toId: type === 'private' ? message.recipientUserId || '' : message.recipientGroupId || '',
                    isPrivate: type === 'private',
                    timestamp: message.timestamp.getTime(),
                    image: '',
                    edited: message.edited,
                    reactions,
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
    });

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
                timestamp: msg.timestamp,
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
                        AND: [{ initiatorId: msg.fromId }, { recipientId: msg.toId }],
                    },
                    {
                        AND: [{ initiatorId: msg.toId }, { recipientId: msg.fromId }],
                    },
                ],
            },
        });

        await prisma.privateChat.upsert({
            where: {
                // Use the compound unique identifier if existing, otherwise create new
                initiatorId_recipientId: existingChat
                    ? { initiatorId: existingChat.initiatorId, recipientId: existingChat.recipientId }
                    : { initiatorId: msg.fromId, recipientId: msg.toId },
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
        });
        const recipientSocketId = Users.get(msg.toId)?.socketId;
        if (recipientSocketId) {
            io.to(recipientSocketId).emit('messageReceived', msg);
        }
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

    // reactToMessage
    socket.on(
        'reactToMessage',
        async ({ messageId, toId, reaction, previousReaction }: { messageId: string; toId: string; reaction: string; previousReaction: string | null }) => {
            // TODO: Update message reactions in DB and emit to affected clients
            const socketId = Users.get(toId)?.socketId;
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
                    emoji: reaction,
                },
                create: {
                    messageId,
                    userId,
                    emoji: reaction,
                },
            });

            socket.to(to).emit('messageReacted', {
                messageId,
                reaction,
                reactedBy: {
                    id: userId,
                    name: Users.get(userId)?.name,
                    timestamp: new Date().getTime(),
                },
                previousReaction,
            });
        },
    );
}
