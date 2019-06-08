import {EffectCallback} from "react";
import {ShoppingMenuItem, ShoppingMenuItemId} from "../../shopping-menu/entities/shopping-menu-item";
import {errorHandler} from "../../environment/error-handler/services/error-handler";
import {createShoppingMenuFetch} from "../../shopping-menu/services/shopping-menu-fetch";

export function getShoppingMenuDictionaryEffectCallback(
    setShoppingMenuDictionary:
        (setShoppingMenuDictionary: Map<ShoppingMenuItemId, ShoppingMenuItem>) => void)
    : EffectCallback {
    return () => {
        createShoppingMenuFetch()
            .getShoppingMenuDictionary()
            .then(setShoppingMenuDictionary)
            .catch(errorHandler.processError);
    };
}