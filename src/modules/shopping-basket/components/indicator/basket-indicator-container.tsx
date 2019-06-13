import React from "react";
import {ShoppingBasketIndicator} from "./basket-indicator";
import {BasketContext} from "modules/shopping-basket/gateways/basket-context";

export const ShoppingBasketIndicatorContainer: React.FC = () => {

    return (<BasketContext.Consumer>
        {(shoppingBasketContext) =>
            <ShoppingBasketIndicator shoppingBasket={shoppingBasketContext.shoppingBasket}/>}
    </BasketContext.Consumer>);
};
