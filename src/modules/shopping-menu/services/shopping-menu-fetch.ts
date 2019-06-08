import {ShoppingMenuFetch} from "../use-cases/shopping-menu-fetch";
import {httpFetch} from "../../environment/http-fetch/services/http-fetch";
import {defineHttpRequestError} from "../../environment/error-handler/use-cases/differentiation-http-request-error";

export function createShoppingMenuFetch(): ShoppingMenuFetch {
    return new ShoppingMenuFetch({
        httpFetch,
        defineHttpRequestError
    });
}