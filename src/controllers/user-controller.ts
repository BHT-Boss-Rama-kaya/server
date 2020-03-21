import { Request, Response } from 'express';
import { UserDAO } from '../data-access/user-dao/user-dao';

export class UserController {
    static async login(req: Request, res: Response) {
        res.status(201).json({ message: 'Success created user' });
    }

    static async register(req: Request, res: Response) {
        try {
            const payload = req.body;
            const created = await UserDAO.create(payload);
            res.status(201).json({ message: 'Success created user', context: created });
        } catch (err) {
            res.status(400).json({ message: 'Created user error', context: err });
        }
    }
}
