export interface ErrorCodes {
    name: string;
    errorCode: number;
    message: string;
    context: object;
    errors?: Array<any>;
}
