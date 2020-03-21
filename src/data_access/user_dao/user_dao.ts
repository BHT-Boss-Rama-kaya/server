import { User } from './models/user.model';
import { IUser } from '../../interfaces/user_interface';
import { generateToken, verifyToken } from '../../helpers/json_web_token';
import { compareHash } from '../../helpers/bcrypt';
import { ErrorBuilder } from '../../helpers/error_builder';

export class UserDAO {
    static async create(payload: IUser): Promise<User> {
        try {
            const userCreated = await User.create(payload);
            return userCreated;
        } catch (err) {
            const errorBuilder = new ErrorBuilder(err);
            throw errorBuilder.throwError();
        }
    }
}
