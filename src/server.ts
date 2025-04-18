import app from './app.js';
import { config } from 'dotenv';
import Config from './config/env.js';
import http from 'http';
import { Server } from 'socket.io';
import registerSocket from './routes/socket.route.js';
import os from "os";
config();

const PORT = Config.PORT;
const HOST = process.env.HOST || 'localhost';

const server = http.createServer(app);

// Initialize WebSocket
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

// Register socket handlers
registerSocket(io);

server.listen(PORT, () => {
    const protocol = process.env.NODE_ENV === 'production' ? 'wss' : 'ws';
    console.log(`🚀 HTTP server: http://${HOST}:${PORT}`);
    console.log(`📡 WebSocket URL: ${protocol}://${HOST}:${PORT}/socket.io/?EIO=4&transport=websocket`);
    console.log(`  OS: ${os.type()} ${os.release()}`);
});

