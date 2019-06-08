import {HttpFetch} from "../../environment/http-fetch/entities/http-fetch";
import {ShoppingBasket} from "../entities/shopping-basket";
import {HttpFetchResponse} from "../../environment/http-fetch/entities/http-fetch-response";
import {
    AddingOrderedItemToShoppingBasketInputDTO,
    AdjustingOrderedItemInShoppingBasketInputDTO,
    RemovingOrderedItemFromShoppingBasketInputDTO,
    ServiceShoppingBasketDTO
} from "../dtos/service-shopping-basket-dtos";
import {HttpFetchResponseError} from "../../environment/http-fetch/entities/http-fetch-response-error";
import {HttpFetchResponseBusinessError} from "../../environment/http-fetch/entities/http-fetch-response-business-error";

interface ShoppingBasketFetchParams {
    httpFetch: HttpFetch;

    defineHttpRequestError(error: HttpFetchResponseError<HttpFetchResponseBusinessError>): Error;
}

export class ShoppingBasketFetch {
    static basePath = '/shopping-basket';

    private readonly httpFetch: HttpFetch;
    private readonly defineHttpRequestError: (error: HttpFetchResponseError<HttpFetchResponseBusinessError>) => Error;

    constructor(params: ShoppingBasketFetchParams) {
        this.httpFetch = params.httpFetch;
        this.defineHttpRequestError = params.defineHttpRequestError;
    }

    addOrder(): Promise<void> {
        const request = () => this.httpFetch.post<object, void>(
            `${ShoppingBasketFetch.basePath}/order`,
            {});

        return this.addRequestTask<void>(request);
    }

    getCurrentShoppingBasket(): Promise<ShoppingBasket> {
        const request = () => this.httpFetch.get<ServiceShoppingBasketDTO>(ShoppingBasketFetch.basePath);

        return this.addRequestTask<ServiceShoppingBasketDTO>(request)
            .then(serviceShoppingBasketDto => new ShoppingBasket(serviceShoppingBasketDto));
    }

    addOrderedItemToShoppingBasket(orderedItemId: string): Promise<ShoppingBasket> {
        const request = () =>
            this.httpFetch.post<AddingOrderedItemToShoppingBasketInputDTO, ServiceShoppingBasketDTO>(
                `${ShoppingBasketFetch.basePath}/ordered-item`,
                {orderedItemId});

        return this.addRequestTask<ServiceShoppingBasketDTO>(request)
            .then(serviceShoppingBasketDto => new ShoppingBasket(serviceShoppingBasketDto));
    }

    adjustOrderedItemInShoppingBasket(orderedItemId: string, adjustmentValue: number): Promise<ShoppingBasket> {
        const request = () => this.httpFetch
            .post<AdjustingOrderedItemInShoppingBasketInputDTO, ServiceShoppingBasketDTO>(
                `${ShoppingBasketFetch.basePath}/ordered-item/${orderedItemId}`,
                {orderedItemId, adjustmentValue});

        return this.addRequestTask<ServiceShoppingBasketDTO>(request)
            .then(serviceShoppingBasketDto => new ShoppingBasket(serviceShoppingBasketDto));
    }

    removeOrderedItemFromShoppingBasket(orderedItemId: string): Promise<ShoppingBasket> {
        const request = () =>
            this.httpFetch.delete<RemovingOrderedItemFromShoppingBasketInputDTO, ServiceShoppingBasketDTO>(
                `${ShoppingBasketFetch.basePath}/ordered-item/${orderedItemId}`,
                {orderedItemId});

        return this.addRequestTask<ServiceShoppingBasketDTO>(request)
            .then(serviceShoppingBasketDto => new ShoppingBasket(serviceShoppingBasketDto));
    }

    private async addRequestTask<TResponse>(requestTask: () => Promise<HttpFetchResponse<TResponse>>):
        Promise<TResponse> {
        try {
            const result = await requestTask();
            return result.data;
        } catch (requestError) {
            throw this.defineHttpRequestError(requestError);
        }
    }
}
