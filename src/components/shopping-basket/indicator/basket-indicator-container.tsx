import React from 'react';
import { ShoppingBasketIndicator } from './basket-indicator';
import { ShoppingBasketContext } from '../../../gateways/shopping-basket-context';

export const ShoppingBasketIndicatorContainer = () => {
    return (
        <ShoppingBasketContext.Consumer>
            {shoppingBasketContext => <ShoppingBasketIndicator shoppingBasket={shoppingBasketContext.shoppingBasket} />}
        </ShoppingBasketContext.Consumer>
    );
};
