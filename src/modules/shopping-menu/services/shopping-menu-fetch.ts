import {ShoppingMenuFetch} from "modules/shopping-menu/use-cases/shopping-menu-fetch";
import {httpFetch} from "modules/environment/http-fetch/services/http-fetch";
import {defineHttpRequestError} from "modules/environment/error-handler/use-cases/differentiation-http-request-error";

export function createShoppingMenuFetch(): ShoppingMenuFetch {
    return new ShoppingMenuFetch({
        httpFetch,
        defineHttpRequestError
    });
}