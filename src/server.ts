import app from './app.js';
import { config } from 'dotenv';
import Config from './config/env.js';
import logger from './config/logger.js';
import http from 'http';
import { Server } from 'socket.io';
import registerSocket from './routes/socket.route.js';
config();

const PORT = Config.PORT;
const HOST = process.env.HOST || 'localhost';

logger.info('Initializing server...');

const server = http.createServer(app);

// Initialize WebSocket
logger.info('Setting up Socket.IO server...');
const io = new Server(server, {
    path: '/api/socket.io',
    cors: {
        origin: Config.CLIENT_URL,
    },
});

// Register socket handlers
logger.info('Registering Socket.IO handlers...');
registerSocket(io);

server.listen(PORT, () => {
    logger.info(`🚀 HTTP server running on http://${HOST}:${PORT}`);
    logger.info(`🔌 Socket.IO server listening on path: /api/socket.io`);
    logger.info(`📍 CORS origin: ${Config.CLIENT_URL}`);
});
