import { mapShoppingBasketOrderedItemsViewModel } from '../order-items';
import { OrderedItem } from '../../entities/ordered-item';
import { ShoppingMenuItem, ShoppingMenuItemId } from '../../../shopping-menu/entities/shopping-menu-item';

describe('mapShoppingBasketOrderedItemsViewModel', () => {
    it('mapShoppingBasketOrderedItemsViewModel', () => {
        const orderedItems: OrderedItem[] = [{ count: 3, itemId: 'm1' }, { count: 1, itemId: 'm2' }];
        const shoppingMenuDictionaryData: [ShoppingMenuItemId, ShoppingMenuItem][] = [
            ['m1', { id: 'm1', name: 'menu name 1' }],
        ];
        const shoppingMenuDictionary = new Map<ShoppingMenuItemId, ShoppingMenuItem>(shoppingMenuDictionaryData);
        const orderedItemsViewModel = mapShoppingBasketOrderedItemsViewModel(orderedItems, shoppingMenuDictionary);
        expect(orderedItemsViewModel.length).toBe(2);
    });
});
