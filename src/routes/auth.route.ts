import { Router } from 'express';
import { login, register, getMe , uploadImage } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.js';
import multer from 'multer';
const AuthRonter = Router();
const upload = multer({ storage: multer.memoryStorage() });

AuthRonter.post('/login', login).post('/register', register);
AuthRonter.get('/me', protect, getMe);
AuthRonter.post('/upload', protect, upload.single('image'), uploadImage);

export default AuthRonter;
