import React from 'react';
import { ShoppingBasketProvider } from './gateways/shopping-basket-provider';
import { BrowserRouter, Route } from 'react-router-dom';
import { urlConfig } from './configs/url';
import { ShoppingMenuPage } from './components/shopping-menu/shopping-menu-page/shopping-menu-page';
import { ShoppingBasketPageContainer } from './components/shopping-basket/shopping-basket-page/shopping-basket-page-container';

const App: React.FC = () => (
    <ShoppingBasketProvider>
        <BrowserRouter>
            <main>
                <Route path={urlConfig.shoppingMenu} exact component={ShoppingMenuPage} />
                <Route path={urlConfig.shoppingBasket} component={ShoppingBasketPageContainer} />
            </main>
        </BrowserRouter>
    </ShoppingBasketProvider>
);

export default App;
