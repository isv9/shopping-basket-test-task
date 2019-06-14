export class HttpRequestStatusError extends Error {
    public readonly status: number;
    public readonly statusText: string;

    constructor(status: number, statusText: string) {
        super(`status = ${status}`);
        this.status = status;
        this.statusText = statusText;
        this.name = 'HttpRequestStatusError';
    }
}
