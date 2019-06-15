import React from 'react';
import { mapShoppingBasketOrderedItemsViewModel } from './presenters/order-items';
import { ShoppingBasketOrderedItems } from './order-items';
import { ShoppingMenuItem, ShoppingMenuItemId } from '../../../entities/shopping-menu/shopping-menu-item';
import { ShoppingBasketContext } from '../../../gateways/shopping-basket-context';

type Props = {
    shoppingMenuDictionary: Map<ShoppingMenuItemId, ShoppingMenuItem>;
};

export const ShoppingBasketOrderedItemsContainer = (props: Props) => {
    const { shoppingMenuDictionary } = props;

    return (
        <ShoppingBasketContext.Consumer>
            {shoppingBasketContext => {
                const { shoppingBasket, adjustOrderedItem, removeOrderedItem } = shoppingBasketContext;

                const orderedItemViewModels = mapShoppingBasketOrderedItemsViewModel(
                    shoppingBasket.orderedItems,
                    shoppingMenuDictionary,
                );
                return (
                    <ShoppingBasketOrderedItems
                        adjustOrderedItem={adjustOrderedItem}
                        removeOrderedItem={removeOrderedItem}
                        orderedItems={orderedItemViewModels}
                    />
                );
            }}
        </ShoppingBasketContext.Consumer>
    );
};
