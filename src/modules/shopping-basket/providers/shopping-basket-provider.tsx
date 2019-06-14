import React, {useEffect, useState} from "react";
import {BasketContext} from "../gateways/basket-context";
import {ShoppingBasket} from "../entities/shopping-basket";
import {shoppingBasketFetch} from "../services/shopping-basket-fetch";
import {errorHandler} from "../../environment/error-handler/services/error-handler";

export const ShoppingBasketProvider: React.FC = (props) => {

    const addMenuItem = (menuItemId: string) => {
        shoppingBasketFetch
            .addOrderedItemToShoppingBasket(menuItemId)
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);
    };

    const removeOrderedItem = (orderedItemId: string) => {
        shoppingBasketFetch
            .removeOrderedItemFromShoppingBasket(orderedItemId)
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);
    };

    const adjustOrderedItem = (orderedItemId: string, adjustmentValue: number) => {
        shoppingBasketFetch
            .adjustOrderedItemInShoppingBasket(orderedItemId, adjustmentValue)
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);
    };

    const clearShoppingBasket = () => {
        updateShoppingBasket(new ShoppingBasket());
    };

    const updateShoppingBasket = (shoppingBasket: ShoppingBasket) => {
        setState({...shoppingBasketContext, shoppingBasket});
    };

    const [shoppingBasketContext, setState] = useState({
        shoppingBasket: new ShoppingBasket(),
        addMenuItem: addMenuItem,
        adjustOrderedItem: adjustOrderedItem,
        clearShoppingBasket: clearShoppingBasket,
        removeOrderedItem: removeOrderedItem,
    });

    useEffect(() => {
        shoppingBasketFetch
            .getCurrentShoppingBasket()
            .then(updateShoppingBasket)
            .catch(errorHandler.processError);
        // eslint-disable-next-line
    }, []);

    const {
        children,
    } = props;

    return <BasketContext.Provider value={shoppingBasketContext}>{children}</BasketContext.Provider>
};
