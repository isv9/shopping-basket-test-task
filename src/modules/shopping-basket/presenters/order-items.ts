import { OrderedItemViewModel } from '../entities/ordered-item-view-model';
import { OrderedItem } from '../entities/ordered-item';
import { ShoppingMenuItem } from '../../shopping-menu/entities/shopping-menu-item';

export function mapShoppingBasketOrderedItemsViewModel(
    orderedItems: OrderedItem[],
    shoppingMenuDictionary: Map<string, ShoppingMenuItem>,
): OrderedItemViewModel[] {
    return orderedItems.map(orderedItem => {
        const shoppingMenuItem = shoppingMenuDictionary.get(orderedItem.itemId);
        return {
            itemId: orderedItem.itemId,
            name: shoppingMenuItem ? shoppingMenuItem.name : '',
            orderedCount: orderedItem.count,
        };
    });
}
