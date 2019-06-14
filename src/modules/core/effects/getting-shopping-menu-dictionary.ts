import { useEffect, useState } from 'react';
import { ShoppingMenuItem, ShoppingMenuItemId } from '../../shopping-menu/entities/shopping-menu-item';
import { errorHandler } from '../../environment/error-handler/services/error-handler';
import { createShoppingMenuFetch } from '../../shopping-menu/services/shopping-menu-fetch';

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
