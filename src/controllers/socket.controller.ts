import { Socket } from 'socket.io';
import prisma from 'src/repositories/client.js';

type MessagePayload = {
    messageId: string;
    content: string;
    senderId: string;
    channelId: string;
    createdAt: string;
};

export const handleChatMessage = async (
    socket: Socket,
    data: MessagePayload,
) => {
    const { content, senderId, channelId } = data;

    const message = await prisma.message.create({
        data: { content, senderId, channelId },
    });

    // Broadcast ไป channel
    socket.to(channelId).emit('chat_message', {
        type: 'chat_message',
        message,
    });

    console.log(`💬 chat_message handled in channel ${channelId}`);
};

export const handleJoinChannel = async (socket: Socket, data: any) => {
    const { channelId, user } = data;
    socket.join(channelId);
    console.log(`🔗 ${socket.id} joined ${channelId}`);

    const userId = user.id;
    await prisma.channelMember.create({
        data: {
            channelId,
            userId,
        },
    });

    socket.emit('joined_channel', {
        type: 'joined_channel',
        channelId,
    });

    socket.to(channelId).emit('user_joined', {
        type: 'user_joined',
        user,
    });
};

export const handleLeaveChannel = (socket: Socket, data: any) => {
    const { channelId, user } = data;
    const userId = user.id;

    prisma.channelMember
        .delete({
            where: {
                userId_channelId: {
                    channelId,
                    userId,
                },
            },
        })
        .catch((err) => {
            console.error('Error leaving channel:', err);
        });

    socket.leave(channelId);
    console.log(`🔗 ${socket.id} left ${channelId}`);

    socket.to(channelId).emit('user_left', {
        type: 'user_left',
        user,
    });
};

export const handleLeaveRoom = (socket: Socket, data: any) => {
    const { channelId } = data;
    socket.leave(channelId);
    console.log(`🔗 ${socket.id} left ${channelId}`);
};
