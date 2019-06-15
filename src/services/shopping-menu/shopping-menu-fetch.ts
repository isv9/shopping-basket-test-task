import { ShoppingMenuFetch } from '../../use-cases/shopping-menu/shopping-menu-fetch';
import { httpFetch } from '../http-fetch/http-fetch';
import { defineHttpRequestError } from '../../use-cases/error-handler/differentiation-http-request-error';

export function createShoppingMenuFetch(): ShoppingMenuFetch {
    return new ShoppingMenuFetch({
        httpFetch,
        defineHttpRequestError,
    });
}
