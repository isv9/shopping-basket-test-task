import { ShoppingMenuItem, ShoppingMenuItemId } from '../../entities/shopping-menu/shopping-menu-item';
import { HttpFetch } from '../../entities/http-fetch/http-fetch';
import { HttpFetchResponseError } from '../../entities/http-fetch/http-fetch-response-error';
import { HttpFetchResponseBusinessError } from '../../entities/http-fetch/http-fetch-response-business-error';

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
            const menu = await this.httpFetch.get<ShoppingMenuItem[]>(ShoppingMenuFetch.basePath);
            return new Map(menu.data.map(mapShoppingMenuItemToDictionaryItem));
        } catch (requestError) {
            throw this.defineHttpRequestError(requestError);
        }
    }
}

function mapShoppingMenuItemToDictionaryItem(
    shoppingMenuItem: ShoppingMenuItem,
): [ShoppingMenuItemId, ShoppingMenuItem] {
    return [shoppingMenuItem.id, shoppingMenuItem];
}
