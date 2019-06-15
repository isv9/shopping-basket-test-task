import { HttpFetchResponse } from './http-fetch-response';

export interface HttpFetchResponseError<TErrorBody = object> extends Error {
    request?: object;
    response: HttpFetchResponse<TErrorBody>;
    code?: string;
}
