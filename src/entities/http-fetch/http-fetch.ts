import { HttpFetchResponse } from './http-fetch-response';

export interface HttpFetch {
    get<TResponse = object>(url: string): Promise<HttpFetchResponse<TResponse>>;

    post<TBody, TResponse = object>(url: string, data: TBody): Promise<HttpFetchResponse<TResponse>>;

    delete<TBody, TResponse = object>(url: string, data: TBody): Promise<HttpFetchResponse<TResponse>>;
}
