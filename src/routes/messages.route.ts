import { Router } from 'express';
import {
    getMessages,
    postMessage,
} from '../controllers/messages.controller.js';
import { protect } from 'src/middleware/auth.js';

const MessageRouter = Router();

MessageRouter.get('/', protect, getMessages);
MessageRouter.post('/', protect, postMessage);

export default MessageRouter;
