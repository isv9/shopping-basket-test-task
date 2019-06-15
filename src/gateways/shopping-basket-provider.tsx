import React, { ReactElement, useEffect, useState } from 'react';
import { ShoppingBasket } from '../entities/shopping-basket/shopping-basket';
import { shoppingBasketFetch } from '../services/shopping-basket/shopping-basket-fetch';
import { errorHandler } from '../services/error-handler';
import { ShoppingBasketContext } from './shopping-basket-context';

interface Props {
    children: ReactElement;
}

export const ShoppingBasketProvider = (props: Props) => {
    const [shoppingBasketContext, setState] = useState({
        shoppingBasket: new ShoppingBasket(),
        addMenuItem: addMenuItem,
        adjustOrderedItem: adjustOrderedItem,
        clearShoppingBasket: clearShoppingBasket,
        removeOrderedItem: removeOrderedItem,
    });

    function updateShoppingBasket(shoppingBasket: ShoppingBasket) {
        setState({ ...shoppingBasketContext, shoppingBasket });
    }

    useEffect(() => {
        shoppingBasketFetch
            .getCurrentShoppingBasket()
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);// eslint-disable-next-line
    }, []);

    function addMenuItem(menuItemId: string) {
        shoppingBasketFetch
            .addOrderedItemToShoppingBasket(menuItemId)
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);
    }

    function removeOrderedItem(orderedItemId: string) {
        shoppingBasketFetch
            .removeOrderedItemFromShoppingBasket(orderedItemId)
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);
    }

    function adjustOrderedItem(orderedItemId: string, adjustmentValue: number) {
        shoppingBasketFetch
            .adjustOrderedItemInShoppingBasket(orderedItemId, adjustmentValue)
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);
    }

    function clearShoppingBasket() {
        updateShoppingBasket(new ShoppingBasket());
    }

    const { children } = props;

    return <ShoppingBasketContext.Provider value={shoppingBasketContext}>{children}</ShoppingBasketContext.Provider>;
};
