import { Request, Response, NextFunction } from 'express';
import * as R from 'ramda';
import { ErrorCodes } from '../interfaces/error_interface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: ErrorCodes, req: Request, res: Response, next: NextFunction) {
    let statusCode = err.errorCode || 500;
    let message = err.message || 'INTERNAL SERVER ERROR';
    let context = err.context || null;

    switch (err.name) {
        case 'SequelizeValidationError':
            {
                const errValidation: string[] = [];
                const addErrValidation = (x: { message: string }) => errValidation.push(x.message);

                R.forEach(addErrValidation, err.errors);

                statusCode = 400;
                message = 'Sequelize Validation Error';
                context = {
                    validationErrorPath: errValidation
                };

                res.status(statusCode).json({ message, context });
            }
            break;
        default:
            res.status(statusCode).json({ message, context });
            break;
    }
}
