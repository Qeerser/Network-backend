import { Router } from 'express';
import {
    createChannel,
    getChannels,
    createDMChannel,
} from '../controllers/channel.controller.js';
import { protect } from 'src/middleware/auth.js';

const router = Router();

router.post('/', protect, createChannel).post('/dm', protect, createDMChannel);
router.get('/', protect, getChannels).get('/dm', protect, getChannels);

export default router;
