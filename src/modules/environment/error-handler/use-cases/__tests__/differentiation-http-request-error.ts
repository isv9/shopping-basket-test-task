import {
    defineHttpRequestError,
    defineHttpRequestErrorByStatus
} from "modules/environment/error-handler/use-cases/differentiation-http-request-error";
import {HttpFetchResponseError} from "modules/environment/http-fetch/entities/http-fetch-response-error";
import {HttpFetchResponseBusinessError} from "modules/environment/http-fetch/entities/http-fetch-response-business-error";
import {NetworkError} from "modules/environment/error-handler/entities/network-error";
import {HttpFetchResponse} from "modules/environment/http-fetch/entities/http-fetch-response";


describe('defineHttpRequestError', () => {

    it('with undefined', () => {
        expect(defineHttpRequestError(undefined)).toMatchSnapshot();
    });

    it('NetworkError', () => {
        const error = {
            message: 'Network Error'
        } as Partial<HttpFetchResponseError<HttpFetchResponseBusinessError>> as HttpFetchResponseError<HttpFetchResponseBusinessError>;
        expect(defineHttpRequestError(error)).toBeInstanceOf(NetworkError);
    });

});

describe('defineHttpRequestErrorByStatus', () => {

    it('without status', () => {
        const error = {} as Partial<HttpFetchResponse<HttpFetchResponseBusinessError>> as HttpFetchResponse<HttpFetchResponseBusinessError>;
        expect(defineHttpRequestErrorByStatus(error)).toMatchSnapshot();
    });

    it('with 400 status', () => {
        const error = {
            data: {
                error: 'test error message'
            },
            status: 400
        } as Partial<HttpFetchResponse<HttpFetchResponseBusinessError>> as HttpFetchResponse<HttpFetchResponseBusinessError>;
        expect(defineHttpRequestErrorByStatus(error)).toMatchSnapshot();
    });

});