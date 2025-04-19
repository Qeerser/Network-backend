import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import Config from 'src/config/env.js';
import prisma from 'src/repositories/client.js';

// Extend Express Request interface
declare module 'express' {
    interface Request {
        user?: { name: string; id: string };
    }
}

// Protect routes
const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists
    if (!token) {
        res.status(401).json({ success: false, message: 'Not authorized to access this route' });
        return;
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, Config.JWT_SECRET) as { id: string };

        console.log(decoded);

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                name: true,
            },
        });
        if (user){
            req.user = user;
        }
        
        next();
    } catch (err) {
        console.log(err)
        res.status(401).json({
            success: false,
            message: 'Not authorized to access this route',
        });
    }
};

//at the end of file
//Grant access to specific roles

export { protect };
