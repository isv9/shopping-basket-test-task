export class NotFoundObjectError extends Error {
    constructor(objectName: string) {
        super(`Not found '${objectName}'`);
        this.name = 'NotFoundObjectError';
    }
}
