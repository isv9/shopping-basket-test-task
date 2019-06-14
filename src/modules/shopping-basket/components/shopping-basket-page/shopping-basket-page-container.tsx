import React from "react";
import {BasketContext} from "../../gateways/basket-context";
import {RouteComponentProps} from "react-router-dom";
import {urlConfig} from "../../../../configs/url";
import {ShoppingBasketPage} from "./shopping-basket-page";
import {useGettingShoppingMenuDictionary} from "../../../core/effects/getting-shopping-menu-dictionary";
import {createAddingOrderInteractor} from "../../services/adding-order";

export const ShoppingBasketPageContainer: React.FC<RouteComponentProps<object>> = (props) => {

    const shoppingMenuDictionary = useGettingShoppingMenuDictionary();

    return (<BasketContext.Consumer>
        {(shoppingBasketContext) => {

            const {
                shoppingBasket,
                clearShoppingBasket,
            } = shoppingBasketContext;

            const addOrderCommand = createAddingOrderInteractor()
                .getAddingOrderCommand({
                    shoppingBasket: {
                        hasOrderItems: shoppingBasket.hasOrderedItems,
                        clear: clearShoppingBasket
                    },
                    routerGateway: {
                        redirectToMenu: () => props.history.push(urlConfig.shoppingMenu)
                    }
                });
            return <ShoppingBasketPage
                addOrderCommand={addOrderCommand}
                shoppingMenuDictionary={shoppingMenuDictionary}/>;
        }}
    </BasketContext.Consumer>);
};
