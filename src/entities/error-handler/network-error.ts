export class NetworkError extends Error {
    constructor() {
        super('Network error');
        this.name = 'NetworkError';
    }
}
