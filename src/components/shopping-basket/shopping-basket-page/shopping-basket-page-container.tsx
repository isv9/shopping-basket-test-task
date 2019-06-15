import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { urlConfig } from '../../../configs/url';
import { ShoppingBasketPage } from './shopping-basket-page';
import { useGettingShoppingMenuDictionary } from '../../../effects/getting-shopping-menu-dictionary';
import { createAddingOrderInteractor } from '../../../services/shopping-basket/adding-order';
import { ShoppingBasketContext } from '../../../gateways/shopping-basket-context';

export const ShoppingBasketPageContainer = (props: RouteComponentProps) => {
    const shoppingMenuDictionary = useGettingShoppingMenuDictionary();

    return (
        <ShoppingBasketContext.Consumer>
            {shoppingBasketContext => {
                const { shoppingBasket, clearShoppingBasket } = shoppingBasketContext;

                const addOrderCommand = createAddingOrderInteractor().getAddingOrderCommand({
                    shoppingBasket: {
                        hasOrderItems: shoppingBasket.hasOrderedItems,
                        clear: clearShoppingBasket,
                    },
                    routerGateway: {
                        redirectToMenu: () => props.history.push(urlConfig.shoppingMenu),
                    },
                });
                return (
                    <ShoppingBasketPage
                        addOrderCommand={addOrderCommand}
                        shoppingMenuDictionary={shoppingMenuDictionary}
                    />
                );
            }}
        </ShoppingBasketContext.Consumer>
    );
};
