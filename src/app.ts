import express from 'express';
import cors from 'cors';
import AuthRonter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import Config from './config/env.js';
const app = express();
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

app.get('/', (_, res) => {
    res.send('Hello World!');
});

app.use('/auth', AuthRonter);

export default app;
app.use(cors());
