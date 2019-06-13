import {HttpFetch} from "modules/environment/http-fetch/entities/http-fetch";
import {HttpFetchResponseBusinessError} from "modules/environment/http-fetch/entities/http-fetch-response-business-error";
import {HttpFetchResponseError} from "modules/environment/http-fetch/entities/http-fetch-response-error";
import {ShoppingMenuItem, ShoppingMenuItemId} from "modules/shopping-menu/entities/shopping-menu-item";

interface ShoppingMenuFetchParams {
    httpFetch: HttpFetch;

    defineHttpRequestError(error: HttpFetchResponseError<HttpFetchResponseBusinessError>): Error;
}

export class ShoppingMenuFetch {

    private readonly httpFetch: HttpFetch;
    private readonly defineHttpRequestError: (error: HttpFetchResponseError<HttpFetchResponseBusinessError>) => Error;

    constructor(params: ShoppingMenuFetchParams) {
        this.httpFetch = params.httpFetch;
        this.defineHttpRequestError = params.defineHttpRequestError;
    }

    static basePath = '/shopping-menu';

    async getShoppingMenuDictionary(): Promise<Map<ShoppingMenuItemId, ShoppingMenuItem>> {
        try {
            const menu = await this.httpFetch.get<Array<ShoppingMenuItem>>(ShoppingMenuFetch.basePath);
            return new Map(menu.data.map(mapShoppingMenuItemToDictionaryItem))
        } catch (requestError) {
            throw this.defineHttpRequestError(requestError)
        }
    }
}

function mapShoppingMenuItemToDictionaryItem(
    shoppingMenuItem: ShoppingMenuItem): [ShoppingMenuItemId, ShoppingMenuItem] {
    return [shoppingMenuItem.id, shoppingMenuItem];
}