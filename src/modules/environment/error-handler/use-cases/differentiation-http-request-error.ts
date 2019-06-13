import {HttpFetchResponseError} from "modules/environment/http-fetch/entities/http-fetch-response-error";
import {HttpFetchResponseBusinessError} from "modules/environment/http-fetch/entities/http-fetch-response-business-error";
import {NotFoundObjectError} from "modules/environment/error-handler/entities/not-found-object-error";
import {NetworkError} from "modules/environment/error-handler/entities/network-error";
import {HttpFetchResponse} from "modules/environment/http-fetch/entities/http-fetch-response";
import {BusinessError} from "modules/environment/error-handler/entities/business-error";
import {HttpRequestStatusError} from "modules/environment/error-handler/entities/http-reques-status-error";


export function defineHttpRequestError(error?: HttpFetchResponseError<HttpFetchResponseBusinessError>): Error {
    if (error) {
        const {
            response,
            message
        } = error;
        if (message === 'Network Error') {
            return new NetworkError();
        }
        if (response) {
            return defineHttpRequestErrorByStatus(response);
        }
        return new NotFoundObjectError('response in server error');
    }
    return new NotFoundObjectError('server error');
}

export function defineHttpRequestErrorByStatus(response: HttpFetchResponse<HttpFetchResponseBusinessError>): Error {
    const {
        status,
        statusText
    } = response;
    if (!status) {
        return new NotFoundObjectError('status server error');
    }
    switch (status) {
        case 400: {
            const {
                data
            } = response;
            if (!data) {
                return new NotFoundObjectError('server business error');
            }
            return new BusinessError(data.error);
        }
        // case 408:
        // case 504: {
        //     return new TimeoutServerError(status);
        // }
        // and ...
        default: {
            return new HttpRequestStatusError(status, statusText);
        }
    }
}
