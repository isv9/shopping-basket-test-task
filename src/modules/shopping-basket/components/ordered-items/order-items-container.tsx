import React from 'react';
import { BasketContext } from '../../gateways/basket-context';
import { mapShoppingBasketOrderedItemsViewModel } from '../../presenters/order-items';
import { ShoppingBasketOrderedItems } from './order-items';
import { ShoppingMenuItem, ShoppingMenuItemId } from '../../../shopping-menu/entities/shopping-menu-item';

interface ShoppingBasketOrderedItemsContainerProps {
    shoppingMenuDictionary: Map<ShoppingMenuItemId, ShoppingMenuItem>;
}

export const ShoppingBasketOrderedItemsContainer: React.FC<ShoppingBasketOrderedItemsContainerProps> = props => {
    const { shoppingMenuDictionary } = props;

    return (
        <BasketContext.Consumer>
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
        </BasketContext.Consumer>
    );
};
