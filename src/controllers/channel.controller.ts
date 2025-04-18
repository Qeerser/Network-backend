import { Request, Response } from 'express';
import prisma from '../repositories/client.js';

export const createChannel = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const { name, type } = req.body;

    if (!name) {
        res.status(400).json({ error: 'Channel name is required' });
        return;
    }

    const existing = await prisma.channel.findFirst({ where: { name } });
    if (existing) {
        res.status(409).json({ error: 'Channel already exists' });
        return;
    }
    const channel = await prisma.channel.create({
        data: { name, type },
    });

    await prisma.channelMember.create({
        data: {
            channelId: channel.id,
            userId: req.user.id,
        },
    });

    res.status(201).json(channel);
};

export const getChannels = async (_req: Request, res: Response) => {
    const channels = await prisma.channel.findMany({
        orderBy: { createdAt: 'asc' },
    });

    res.json(channels);
};

export const createDMChannel = async (
    _req: Request,
    res: Response,
): Promise<any> => {
    const { user1, user2 } = _req.body;

    const channel = await prisma.channel.create({
        data: {
            name: `${user1}-${user2}`,
            type: 'DM',
        },
    });

    await prisma.channelMember.createMany({
        data: [
            { channelId: channel.id, userId: user1 },
            { channelId: channel.id, userId: user2 },
        ],
    });
    res.json(channel);
    return channel;
};

export const getDMChannel = async (
    _req: Request,
    res: Response,
): Promise<any> => {
    const { user1, user2 } = _req.body;
    const existingDM = await prisma.channel.findFirst({
        where: {
            type: 'DM',
            members: {
                every: {
                    userId: { in: [user1, user2] },
                },
            },
        },
    });

    if (!existingDM) {
        res.status(404).json({ error: 'DM channel not found' });
        return;
    }

    return res.json(existingDM);
};
