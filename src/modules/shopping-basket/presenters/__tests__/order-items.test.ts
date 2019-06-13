import {OrderedItem} from "modules/shopping-basket/entities/ordered-item";
import {ShoppingMenuItem, ShoppingMenuItemId} from "modules/shopping-menu/entities/shopping-menu-item";
import {mapShoppingBasketOrderedItemsViewModel} from "modules/shopping-basket/presenters/order-items";

describe('mapShoppingBasketOrderedItemsViewModel', () => {
    it('mapShoppingBasketOrderedItemsViewModel', () => {
        const orderedItems: Array<OrderedItem> = [
            {count: 3, itemId: 'm1'},
            {count: 1, itemId: 'm2'}
        ];
        const shoppingMenuDictionaryData: Array<[ShoppingMenuItemId, ShoppingMenuItem]> = [
            ['m1', {id: 'm1', name: 'menu name 1'}],
        ];
        const shoppingMenuDictionary = new Map<ShoppingMenuItemId, ShoppingMenuItem>(shoppingMenuDictionaryData);
        const orderedItemsViewModel = mapShoppingBasketOrderedItemsViewModel(orderedItems, shoppingMenuDictionary);
        expect(orderedItemsViewModel.length).toBe(2);
    });
});