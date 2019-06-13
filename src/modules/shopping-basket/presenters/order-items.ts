import {OrderedItem} from "modules/shopping-basket/entities/ordered-item";
import {ShoppingMenuItem} from "modules/shopping-menu/entities/shopping-menu-item";
import {OrderedItemViewModel} from "modules/shopping-basket/entities/ordered-item-view-model";

export function mapShoppingBasketOrderedItemsViewModel(orderedItems: Array<OrderedItem>,
                                                       shoppingMenuDictionary: Map<string, ShoppingMenuItem>)
    : Array<OrderedItemViewModel> {
    return orderedItems.map((orderedItem) => {
        const shoppingMenuItem = shoppingMenuDictionary.get(orderedItem.itemId);
        return {
            itemId: orderedItem.itemId,
            name: shoppingMenuItem ? shoppingMenuItem.name : '',
            orderedCount: orderedItem.count,
        }
    });
}