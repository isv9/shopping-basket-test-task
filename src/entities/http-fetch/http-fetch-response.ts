export interface HttpFetchResponse<TData = object> {
    data: TData;
    status: number;
    statusText: string;
}
