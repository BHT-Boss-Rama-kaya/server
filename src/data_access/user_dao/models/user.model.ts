import { Model, DataTypes } from 'sequelize';
import { database } from '../../../../config/database';
import { getHash } from '../../../helpers/bcrypt';

export class User extends Model {
    public id!: number;

    public username!: string;

    public email!: string;

    public company_id!: string;

    public password!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        company_id: {
            type: new DataTypes.STRING(32),
            allowNull: false
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false
        }
    },
    {
        hooks: {
            // eslint-disable-next-line no-shadow
            beforeCreate: User => {
                const hashedPassword = getHash(User.getDataValue('password'));
                User.setDataValue('password', hashedPassword);
            }
        },
        tableName: 'users',
        sequelize: database
    }
);
