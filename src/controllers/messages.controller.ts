import { Request, Response } from 'express';
import prisma from '../repositories/client.js';

export const getMessages = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { channelId, before, limit = 10 } = req.query;

  if (!channelId) {
    res.status(400).json({ error: 'Missing channelId' });
    return;
  }

  const messages = await prisma.message.findMany({
    where: {
      channelId: String(channelId),
      ...(before && {
        createdAt: { lt: new Date(String(before)) },
      }),
    },
    select: {
      id: true,
      content: true,
      senderId: true,
      createdAt : true,
    },

    orderBy: { createdAt: 'desc' },
    take: Number(limit),
  });

  res.json(messages);
};

export const postMessage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { content, senderId, channelId } = req.body;
  if (!content || !senderId || !channelId) {
    res.status(400).json({ error: 'Missing fields' });
    return;
  }

  const message = await prisma.message.create({
    data: { content, senderId, channelId },
  });

  res.json(message);
};
