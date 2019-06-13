import {useEffect, useState} from "react";
import {ShoppingMenuItem, ShoppingMenuItemId} from "modules/shopping-menu/entities/shopping-menu-item";
import {createShoppingMenuFetch} from "modules/shopping-menu/services/shopping-menu-fetch";
import {errorHandler} from "modules/environment/error-handler/services/error-handler";

export function useGettingShoppingMenuDictionary(): Map<ShoppingMenuItemId, ShoppingMenuItem> {

    const [shoppingMenuDictionary, setShoppingMenuDictionary] =
        useState(new Map<ShoppingMenuItemId, ShoppingMenuItem>());

    useEffect(() => {
        createShoppingMenuFetch()
            .getShoppingMenuDictionary()
            .then(setShoppingMenuDictionary)
            .catch(errorHandler.processError);
    }, []);

    return shoppingMenuDictionary;
}