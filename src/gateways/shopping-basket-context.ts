import React from 'react';
import { ShoppingBasket } from '../entities/shopping-basket/shopping-basket';

interface ShoppingBasketContextModel {
    shoppingBasket: ShoppingBasket;

    addMenuItem(menuItemId: string): void;

    adjustOrderedItem(menuItemId: string, adjustmentValue: number): void;

    clearShoppingBasket(): void;

    removeOrderedItem(menuItemId: string): void;
}

export const ShoppingBasketContext = React.createContext<ShoppingBasketContextModel>({
    shoppingBasket: new ShoppingBasket(),
    addMenuItem: () => {},
    clearShoppingBasket: () => {},
    adjustOrderedItem: () => {},
    removeOrderedItem: () => {},
});
