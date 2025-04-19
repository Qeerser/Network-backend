import { Request, Response } from 'express';
import prisma from '../repositories/client.js';
import { hashPassword, getSignedJwtToken, matchPassword } from '../repositories/User.js';
import Config from 'src/config/env.js';
import ms from 'ms';

const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'Missing fields' });
        return;
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
    }

    const isMatch = await matchPassword(password, user.password);

    if (!isMatch) {
        res.status(400).json({ success: false, msg: 'Invalid credentials' });
        return;
    }
    await sendTokenResponse(user.id, 200, res);
};

const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const hash = await hashPassword(password);
        // Create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hash,
            },
        });

        // Create token

        await sendTokenResponse(user.id, 200, res);
    } catch (err) {
        res.status(400).json({ success: false, msg: err });
    }
};

// Get token from model, create cookie and send response
const sendTokenResponse = async (id: string, statusCode: number, res: Response) => {
    const user = await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
    // Create token
    const token = getSignedJwtToken(id);

    const options = {
        expires: new Date(Date.now() + ms(Config.JWT_EXPIRES_IN as ms.StringValue)),
        httpOnly: true,
        secure: false,
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    const senduser = user
        ? {
              id: user.id,
              username: user.name,
              email: user.email,
          }
        : null;

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user: senduser,
        token,
    });
};

const getMe = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: { id: req.user.id },
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
    res.status(200).json({
        success: true,
        data: user,
    });
};

export { register, login, getMe };
