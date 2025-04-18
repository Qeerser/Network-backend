import express from 'express';
import cors from 'cors';
import AuthRonter from './routes/auth.route.js';
import channelRouter from './routes/channel.route.js';
import MessageRouter from './routes/messages.route.js';
import cookieParser from 'cookie-parser';
const app = express();
// Configure CORS options

app.use(
    cors({
        origin: 'http://localhost:3001', // Replace with your frontend URL
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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth', AuthRonter);
app.use('/message', MessageRouter);
app.use('/channel', channelRouter);

export default app;
app.use(cors());
