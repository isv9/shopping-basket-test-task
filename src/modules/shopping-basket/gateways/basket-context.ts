import React from "react";
import {ShoppingBasket} from "../entities/shopping-basket";

export const BasketContext = React.createContext<BasketContextModel>({
    shoppingBasket: new ShoppingBasket(),
    addMenuItem: () => {
    },
    clearShoppingBasket: () => {
    },
    adjustOrderedItem: () => {
    },
    removeOrderedItem: () => {
    },
});

export interface BasketContextModel {
    shoppingBasket: ShoppingBasket;

    addMenuItem(menuItemId: string): void;

    adjustOrderedItem(menuItemId: string, adjustmentValue: number): void;

    clearShoppingBasket(): void;

    removeOrderedItem(menuItemId: string): void;
}