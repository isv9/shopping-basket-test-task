import React from 'react';
import { BasketContext } from '../../gateways/basket-context';
import { ShoppingBasketIndicator } from './basket-indicator';

export const ShoppingBasketIndicatorContainer: React.FC = () => {
    return (
        <BasketContext.Consumer>
            {shoppingBasketContext => <ShoppingBasketIndicator shoppingBasket={shoppingBasketContext.shoppingBasket} />}
        </BasketContext.Consumer>
    );
};
