import React from 'react';
import { useGettingShoppingMenuDictionary } from '../../../effects/getting-shopping-menu-dictionary';
import { ShoppingMenu } from './shopping-menu';
import { ShoppingBasketContext } from '../../../gateways/shopping-basket-context';

interface ShoppingMenuContainerProps {
    shoppingMenuStyle?: object;
}

export const ShoppingMenuContainer: React.FC<ShoppingMenuContainerProps> = props => {
    const { shoppingMenuStyle } = props;

    const shoppingMenuDictionary = useGettingShoppingMenuDictionary();

    return (
        <ShoppingBasketContext.Consumer>
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
        </ShoppingBasketContext.Consumer>
    );
};
