import { Request, Response, NextFunction } from 'express';
import * as R from 'ramda';
import { ErrorCodes } from '../interfaces/error_interface';

export function errorHandler(err: ErrorCodes, req: Request, res: Response, next: NextFunction) {
    let statusCode = err.errorCode || 500;
    let message = err.message || 'INTERNAL SERVER ERROR';
    let context = err.context || null;

    switch (err.name) {
        case 'SequelizeValidationError':
            {
                const errValidation: string[] = [];
                err.errors.forEach(el => {
                    errValidation.push(el.message);
                });

                statusCode = 400;
                message = 'Sequelize Validation Error';
                context = {
                    validationErrorPath: errValidation
                };

                res.status(statusCode).json({ message, context });
            }
            break;

        default:
            break;
    }
}
