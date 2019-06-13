import {ShoppingBasketFetch} from "modules/shopping-basket/use-cases/shopping-basket-fetch";
import {httpFetch} from "modules/environment/http-fetch/services/http-fetch";
import {defineHttpRequestError} from "modules/environment/error-handler/use-cases/differentiation-http-request-error";

export const shoppingBasketFetch: ShoppingBasketFetch = new ShoppingBasketFetch({
    httpFetch,
    defineHttpRequestError
});