import { useEffect, useState } from 'react';
import { ShoppingMenuItem, ShoppingMenuItemId } from '../entities/shopping-menu/shopping-menu-item';
import { errorHandler } from '../services/error-handler';
import { createShoppingMenuFetch } from '../services/shopping-menu/shopping-menu-fetch';

export function useGettingShoppingMenuDictionary(): Map<ShoppingMenuItemId, ShoppingMenuItem> {
    const [shoppingMenuDictionary, setShoppingMenuDictionary] = useState(
        new Map<ShoppingMenuItemId, ShoppingMenuItem>(),
    );

    useEffect(() => {
        createShoppingMenuFetch()
            .getShoppingMenuDictionary()
            .then(setShoppingMenuDictionary)
            .catch(errorHandler.processError);
    }, []);

    return shoppingMenuDictionary;
}
