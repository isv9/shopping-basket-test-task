import React from 'react';
import { BasketContext } from '../../../shopping-basket/gateways/basket-context';
import { useGettingShoppingMenuDictionary } from '../../../core/effects/getting-shopping-menu-dictionary';
import { ShoppingMenu } from './shopping-menu';

interface ShoppingMenuContainerProps {
    shoppingMenuStyle?: object;
}

export const ShoppingMenuContainer: React.FC<ShoppingMenuContainerProps> = props => {
    const { shoppingMenuStyle } = props;

    const shoppingMenuDictionary = useGettingShoppingMenuDictionary();

    return (
        <BasketContext.Consumer>
            {({ addMenuItem, adjustOrderedItem, shoppingBasket }) => {
                return (
                    <ShoppingMenu
                        addMenuItem={addMenuItem}
                        adjustOrderedItem={adjustOrderedItem}
                        getOrderedItemCount={itemId => shoppingBasket.getOrderedItemCount(itemId)}
                        style={shoppingMenuStyle}
                        menu={Array.from(shoppingMenuDictionary.values())}
                    />
                );
            }}
        </BasketContext.Consumer>
    );
};
