import app from './app.js';
import { config } from 'dotenv';
import Config from './config/env.js';
import http from 'http';
import { Server } from 'socket.io';
import registerSocket from './routes/socket.route.js';
import os from 'os';
config();

const PORT = Config.PORT;
const HOST = process.env.HOST || 'localhost';

const server = http.createServer(app);

// Initialize WebSocket
const io = new Server(server, {
    cors: {
        origin: Config.CLIENT_URL,
    },
});

// Register socket handlers
registerSocket(io);

server.listen(PORT, () => {
    console.log(`🚀 HTTP server: http://${HOST}:${PORT}`);
});
