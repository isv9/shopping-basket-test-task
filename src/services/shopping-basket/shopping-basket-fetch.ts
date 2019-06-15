import { ShoppingBasketFetch } from '../../use-cases/shopping-basket/shopping-basket-fetch';
import { httpFetch } from '../http-fetch/http-fetch';
import { defineHttpRequestError } from '../../use-cases/error-handler/differentiation-http-request-error';

export const shoppingBasketFetch: ShoppingBasketFetch = new ShoppingBasketFetch({
    httpFetch,
    defineHttpRequestError,
});
