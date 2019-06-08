import React, {useEffect, useState} from "react";
import {ShoppingMenuItem, ShoppingMenuItemId} from "../../entities/shopping-menu-item";
import {BasketContext} from "../../../shopping-basket/gateways/basket-context";
import {getShoppingMenuDictionaryEffectCallback} from "../../../core/effects/get-shopping-menu-dictionary";
import {ShoppingMenu} from "./shopping-menu";

interface ShoppingMenuContainerProps {
    shoppingMenuStyle?: object;
}

export const ShoppingMenuContainer: React.FC<ShoppingMenuContainerProps> = (props) => {

    const {
        shoppingMenuStyle
    } = props;

    const [shoppingMenuDictionary, setShoppingMenuDictionary] =
        useState(new Map<ShoppingMenuItemId, ShoppingMenuItem>());

    useEffect(getShoppingMenuDictionaryEffectCallback(setShoppingMenuDictionary), []);

    return (<BasketContext.Consumer>
        {({
              addMenuItem,
              adjustOrderedItem,
              shoppingBasket,
          }) => {
            return <ShoppingMenu
                addMenuItem={addMenuItem}
                adjustOrderedItem={adjustOrderedItem}
                getOrderedItemCount={(itemId => shoppingBasket.getOrderedItemCount(itemId))}
                style={shoppingMenuStyle}
                menu={Array.from(shoppingMenuDictionary.values())}/>;
        }}
    </BasketContext.Consumer>);
};