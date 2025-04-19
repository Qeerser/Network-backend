import { Router } from 'express';
import { login, register, getMe } from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.js';
const AuthRonter = Router();

AuthRonter.post('/login', login).post('/register', register);
AuthRonter.get('/me', protect, getMe);

export default AuthRonter;
