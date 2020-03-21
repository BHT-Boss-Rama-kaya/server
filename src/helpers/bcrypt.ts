import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

export function getHash(password: string): string {
    return bcrypt.hashSync(password, salt);
}

export function compareHash(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
}
