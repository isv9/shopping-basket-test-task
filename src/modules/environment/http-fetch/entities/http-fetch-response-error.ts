import {HttpFetchResponse} from "./http-fetch-response";

export interface HttpFetchResponseError<TErrorBody = any> extends Error {
    request?: any;
    response: HttpFetchResponse<TErrorBody>;
    code?: string;
}