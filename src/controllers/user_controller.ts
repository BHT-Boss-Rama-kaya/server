import { Request, Response, NextFunction } from 'express';
import { UserDAO } from '../data_access/user_dao/user_dao';

export class UserController {
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(201).json({ message: 'Success created user' });
        } catch (err) {
            next(err);
        }
    }

    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const payload = req.body;
            const created = await UserDAO.create(payload);
            res.status(201).json({ message: 'Success created user', context: created });
        } catch (err) {
            next(err);
        }
    }
}
