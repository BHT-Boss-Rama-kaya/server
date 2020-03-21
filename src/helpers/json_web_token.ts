import jwt from 'jsonwebtoken';

export function generateToken(payload: any) {
    return jwt.sign(payload, process.env.SECRET_JWT);
}

export function verifyToken(token: string) {
    return jwt.sign(token, process.env.SECRET_JWT);
}
