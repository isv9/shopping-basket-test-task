import {ShoppingBasketFetch} from "../use-cases/shopping-basket-fetch";
import {httpFetch} from "../../environment/http-fetch/services/http-fetch";
import {defineHttpRequestError} from "../../environment/error-handler/use-cases/differentiation-http-request-error";

export const shoppingBasketFetch: ShoppingBasketFetch = new ShoppingBasketFetch({
    httpFetch,
    defineHttpRequestError
});