import express, { Request, Response } from 'express';
import { userRouter } from './user-router';

const router = express.Router();

router.get('/health', function healthChecker(req: Request, res: Response) {
    res.status(200).json({ message: 'Connected' });
});

router.use('/user', userRouter);

export { router };
