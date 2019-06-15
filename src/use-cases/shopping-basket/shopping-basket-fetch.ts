import { HttpFetch } from '../../entities/http-fetch/http-fetch';
import { ShoppingBasket } from '../../entities/shopping-basket/shopping-basket';
import { HttpFetchResponse } from '../../entities/http-fetch/http-fetch-response';
import {
    AddingOrderedItemToShoppingBasketInputDTO,
    AdjustingOrderedItemInShoppingBasketInputDTO,
    RemovingOrderedItemFromShoppingBasketInputDTO,
    ServiceShoppingBasketDTO,
} from '../../services-models/service-shopping-basket-dtos';
import { HttpFetchResponseError } from '../../entities/http-fetch/http-fetch-response-error';
import { HttpFetchResponseBusinessError } from '../../entities/http-fetch/http-fetch-response-business-error';

interface DefineHttpRequestError {
    (error: HttpFetchResponseError<HttpFetchResponseBusinessError>): Error;
}

interface ShoppingBasketFetchParams {
    httpFetch: HttpFetch;
    defineHttpRequestError: DefineHttpRequestError;
}

function createShoppingBasket(dto: HttpFetchResponse<ServiceShoppingBasketDTO>): ShoppingBasket {
    return new ShoppingBasket(dto.data);
}

export class ShoppingBasketFetch {
    static readonly basePath = '/shopping-basket';

    private readonly httpFetch: HttpFetch;
    private readonly defineHttpRequestError: DefineHttpRequestError;

    constructor(params: ShoppingBasketFetchParams) {
        this.httpFetch = params.httpFetch;
        this.defineHttpRequestError = params.defineHttpRequestError;
        this.httpFetchErrorHandler = this.httpFetchErrorHandler.bind(this);
    }

    addOrder(): Promise<void> {
        return this.httpFetch
            .post<object, void>(`${ShoppingBasketFetch.basePath}/order`, {})
            .then(response => response.data)
            .catch(this.httpFetchErrorHandler);
    }

    getCurrentShoppingBasket(): Promise<ShoppingBasket> {
        return this.httpFetch
            .get<ServiceShoppingBasketDTO>(ShoppingBasketFetch.basePath)
            .then(createShoppingBasket)
            .catch(this.httpFetchErrorHandler);
    }

    addOrderedItemToShoppingBasket(orderedItemId: string): Promise<ShoppingBasket> {
        return this.httpFetch
            .post<AddingOrderedItemToShoppingBasketInputDTO, ServiceShoppingBasketDTO>(
            `${ShoppingBasketFetch.basePath}/ordered-item`,
            { orderedItemId })
            .then(createShoppingBasket)
            .catch(this.httpFetchErrorHandler);
    }

    adjustOrderedItemInShoppingBasket(orderedItemId: string, adjustmentValue: number): Promise<ShoppingBasket> {
        return this.httpFetch
            .post<AdjustingOrderedItemInShoppingBasketInputDTO, ServiceShoppingBasketDTO>(
            `${ShoppingBasketFetch.basePath}/ordered-item/${orderedItemId}`,
            {
                orderedItemId,
                adjustmentValue,
            })
            .then(createShoppingBasket)
            .catch(this.httpFetchErrorHandler);
    }

    removeOrderedItemFromShoppingBasket(orderedItemId: string): Promise<ShoppingBasket> {
        return this.httpFetch
            .delete<RemovingOrderedItemFromShoppingBasketInputDTO, ServiceShoppingBasketDTO>(
            `${ShoppingBasketFetch.basePath}/ordered-item/${orderedItemId}`,
            { orderedItemId })
            .then(createShoppingBasket)
            .catch(this.httpFetchErrorHandler);
    }

    private httpFetchErrorHandler(httpFetchError: HttpFetchResponseError<HttpFetchResponseBusinessError>): never {
        throw this.defineHttpRequestError(httpFetchError);
    }
}
