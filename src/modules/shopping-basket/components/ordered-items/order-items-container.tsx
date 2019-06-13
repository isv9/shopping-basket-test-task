import React from "react";
import {ShoppingBasketOrderedItems} from "./order-items";
import {ShoppingMenuItem, ShoppingMenuItemId} from "modules/shopping-menu/entities/shopping-menu-item";
import {mapShoppingBasketOrderedItemsViewModel} from "modules/shopping-basket/presenters/order-items";
import {BasketContext} from "modules/shopping-basket/gateways/basket-context";

interface ShoppingBasketOrderedItemsContainerProps {
    shoppingMenuDictionary: Map<ShoppingMenuItemId, ShoppingMenuItem>;
}

export const ShoppingBasketOrderedItemsContainer: React.FC<ShoppingBasketOrderedItemsContainerProps> = (props) => {

    const {
        shoppingMenuDictionary,
    } = props;

    return (<BasketContext.Consumer>
        {(shoppingBasketContext) => {
            const {
                shoppingBasket,
                adjustOrderedItem,
                removeOrderedItem,
            } = shoppingBasketContext;

            const orderedItemViewModels = mapShoppingBasketOrderedItemsViewModel(shoppingBasket.orderedItems,
                shoppingMenuDictionary);
            return <ShoppingBasketOrderedItems adjustOrderedItem={adjustOrderedItem}
                                               removeOrderedItem={removeOrderedItem}
                                               orderedItems={orderedItemViewModels}/>;
        }}
    </BasketContext.Consumer>);
};