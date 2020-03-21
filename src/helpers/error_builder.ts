interface ErrorContext {
    err: object;
}

export class ErrorBuilder {
    errorContext: ErrorContext;

    public constructor(errorContext: ErrorContext) {
        this.errorContext = errorContext;
    }

    public throwError(): ErrorContext {
        return this.errorContext;
    }
}
