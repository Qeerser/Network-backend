import express, { Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import AuthRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import Config from './config/env.js';
import logger, { morganStream } from './config/logger.js';

const app = express();

// HTTP request logging
app.use(morgan('combined', { stream: morganStream }));

logger.info('Starting application...');
logger.info(`Environment: ${Config.NODE_ENV}`);
logger.info(`Client URL: ${Config.CLIENT_URL}`);
// Configure CORS options

app.use(
    cors({
        origin: Config.CLIENT_URL, // Replace with your frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        exposedHeaders: ['Content-Type'],
        // WebSocket support
        optionsSuccessStatus: 200,
    }),
);
app.use(express.json());
app.use(cookieParser());
const router = Router();
app.use("/api",router)
router.get('/', (_, res) => {
    logger.info('Health check endpoint accessed');
    res.send('Hello World!');
});

router.use('/auth', AuthRouter);

// Error handling middleware
app.use((error: Error, req: express.Request, res: express.Response) => {
    logger.error(`Error: ${error.message}`, { 
        stack: error.stack,
        url: req.url,
        method: req.method,
        ip: req.ip 
    });
    
    res.status(500).json({
        message: Config.NODE_ENV === 'development' ? error.message : 'Internal Server Error',
        ...(Config.NODE_ENV === 'development' && { stack: error.stack })
    });
});

// 404 handler
app.use((req: express.Request, res: express.Response) => {
    logger.warn(`404 - Route not found: ${req.method} ${req.url}`);
    res.status(404).json({ message: 'Route not found' });
});

export default app;
