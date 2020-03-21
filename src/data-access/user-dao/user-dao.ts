import { User } from './models/user.model';
import { IUser } from '../../interfaces/user-interfaces';
import { generateToken, verifyToken } from '../../helpers/json-web-token';
import { compareHash } from '../../helpers/bcrypt';

export class UserDAO {
    static async create(payload: IUser): Promise<User> {
        try {
            const userCreated = await User.create(payload);
            return userCreated;
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}
