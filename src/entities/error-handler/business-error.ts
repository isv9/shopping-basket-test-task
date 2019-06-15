export class BusinessError extends Error {
    constructor(errorDescription: string) {
        super(errorDescription);
        this.name = 'BusinessError';
    }
}
