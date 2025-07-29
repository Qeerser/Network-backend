import { Request, Response } from 'express';
import prisma from '../repositories/client.js';
import { hashPassword, getSignedJwtToken, matchPassword } from '../repositories/User.js';
import Config from '../config/env.js';
import logger from '../config/logger.js';
import ms from 'ms';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import path from 'path';

const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    
    logger.info(`Login attempt for email: ${email}`);
    
    if (!email || !password) {
        logger.warn(`Login failed: Missing fields for email: ${email}`);
        res.status(400).json({ error: 'Missing fields' });
        return;
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        logger.warn(`Login failed: User not found for email: ${email}`);
        res.status(401).json({ error: 'Invalid credentials' });
        return;
    }

    const isMatch = await matchPassword(password, user.password);

    if (!isMatch) {
        logger.warn(`Login failed: Invalid password for email: ${email}`);
        res.status(400).json({ success: false, msg: 'Invalid credentials' });
        return;
    }
    
    logger.info(`Login successful for user: ${email}`);
    await sendTokenResponse(user.id, 200, res);
};

const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;
        
        logger.info(`Registration attempt for email: ${email}`);
        
        // Validate required fields
        if (!name || !email || !password) {
            logger.warn(`Registration failed: Missing required fields for email: ${email}`);
            res.status(400).json({ 
                success: false, 
                message: 'Missing required fields: name, email, and password are required' 
            });
            return;
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            logger.warn(`Registration failed: User already exists with email: ${email}`);
            res.status(400).json({ 
                success: false, 
                message: 'User with this email already exists' 
            });
            return;
        }
        
        const hash = await hashPassword(password);
        
        // Create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hash,
            },
        });

        logger.info(`User registered successfully: ${email} (ID: ${user.id})`);
        await sendTokenResponse(user.id, 201, res);
        
    } catch (err: unknown) {
        const error = err as Error & { code?: string };
        logger.error(`Registration failed for email: ${req.body?.email || 'unknown'}`, {
            error: error.message,
            stack: error.stack,
            code: error.code
        });
        
        // Handle specific Prisma errors
        if (error.code === 'P2002') {
            res.status(400).json({ 
                success: false, 
                message: 'User with this email already exists' 
            });
            return;
        }
        
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error during registration' 
        });
    }
};

// Get token from model, create cookie and send response
const sendTokenResponse = async (id: string, statusCode: number, res: Response): Promise<void> => {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });

        if (!user) {
            logger.error(`User not found with ID: ${id}`);
            res.status(404).json({
                success: false,
                message: 'User not found'
            });
            return;
        }

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

        const senduser = {
            id: user.id,
            username: user.name,
            email: user.email,
        };

        logger.info(`Token sent successfully for user: ${user.email}`);

        res.status(statusCode).cookie('token', token, options).json({
            success: true,
            user: senduser,
            token,
        });
    } catch (error) {
        logger.error(`Error in sendTokenResponse for user ID: ${id}`, error);
        res.status(500).json({
            success: false,
            message: 'Error generating authentication token'
        });
    }
};

const getMe = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: { id: req.user?.id },
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

// Supabase S3 Configuration
const supabaseRegion = Config.SUPABASE_REGION;
const supabaseAccessKeyId = Config.SUPABASE_ACCESS_KEY;
const supabaseSecretAccessKey = Config.SUPABASE_SECRET_KEY;
const supabaseEndpoint = Config.SUPABASE_URL;

const s3Client = new S3Client({
    forcePathStyle: true,
    region: supabaseRegion,
    endpoint: supabaseEndpoint + "/s3",
    credentials: {
        accessKeyId: supabaseAccessKeyId,
        secretAccessKey: supabaseSecretAccessKey,
    },
});

interface ImageUploadRequest extends Request {
    file?: Express.Multer.File;
}

// API endpoint for receiving the image and uploading to S3
const uploadImage = async (req: ImageUploadRequest, res: Response): Promise<void> => {
    if (!req.file) {
        res.status(400).json({ error: 'No image file uploaded.' });
        return;
    }

    const file = req.file;
    const fileName = `image-${Date.now()}${path.extname(file.originalname)}`;
    const s3Key = fileName; // The key under which the file will be stored in S3

    const uploadParams = {
        Bucket: "image",
        Key: s3Key,
        Body: file.buffer,
        ContentType: file.mimetype,
    };

    try {
        const command = new PutObjectCommand(uploadParams);
        const result = await s3Client.send(command);
        console.log('S3 upload result:', result);

        // Construct the public URL of the uploaded image (if your bucket is configured for public access)
        const imageUrl = `${supabaseEndpoint}/object/public/image/${s3Key}`;

        res.status(200).json({
            message: 'Image uploaded successfully to S3!',
            s3Key: s3Key,
            url: imageUrl,
            etag: result.ETag, // You might want to return the ETag
        });
    } catch (error) {
        console.error('Error uploading to S3:', error);
        res.status(500).json({ error: 'Failed to upload image to S3.' });
    }
};

export { register, login, getMe, uploadImage };
