import express from 'express';
import { UserController } from '../controllers/user_controller';

const userRouter = express();

userRouter.get('/login', UserController.login);
userRouter.post('/register', UserController.register);

export { userRouter };
