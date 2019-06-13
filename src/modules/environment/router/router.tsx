import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {urlConfig} from "configs/url";
import {ShoppingMenuPage} from "modules/shopping-menu/components/shopping-menu-page/shopping-menu-page";
import {ShoppingBasketPageContainer} from "modules/shopping-basket/components/shopping-basket-page/shopping-basket-page-container";

export const Router: React.FC = () => {
    return (<BrowserRouter>
        <main>
            <Route path={urlConfig.shoppingMenu} exact component={ShoppingMenuPage}/>
            <Route path={urlConfig.shoppingBasket} component={ShoppingBasketPageContainer}/>
        </main>
    </BrowserRouter>);
};