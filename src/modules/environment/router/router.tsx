import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { urlConfig } from '../../../configs/url';
import { ShoppingBasketPageContainer } from '../../shopping-basket/components/shopping-basket-page/shopping-basket-page-container';
import { ShoppingMenuPage } from '../../shopping-menu/components/shopping-menu-page/shopping-menu-page';

export const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <main>
                <Route path={urlConfig.shoppingMenu} exact component={ShoppingMenuPage} />
                <Route path={urlConfig.shoppingBasket} component={ShoppingBasketPageContainer} />
            </main>
        </BrowserRouter>
    );
};
