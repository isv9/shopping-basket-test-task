import React from 'react';
import { useGettingShoppingMenuDictionary } from '../../../effects/getting-shopping-menu-dictionary';
import { ShoppingMenu } from './shopping-menu';
import { ShoppingBasketContext } from '../../../gateways/shopping-basket-context';

type Props = {
    shoppingMenuStyle?: object;
};

export const ShoppingMenuContainer = (props: Props) => {
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
