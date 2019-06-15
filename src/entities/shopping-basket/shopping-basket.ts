import { OrderedItem } from './ordered-item';

export class ShoppingBasket {
    constructor(params?: ShoppingBasketParams) {
        const { orderedItems = [] } = params || { orderedItems: [] };
        this.orderedItems = [...orderedItems];
    }

    readonly orderedItems: OrderedItem[] = [];

    get orderedItemsCount(): number {
        return this.orderedItems.reduce<number>((orderItemsCount, orderItem) => {
            const { count } = orderItem;
            return orderItemsCount + count;
        }, 0);
    }

    get hasOrderedItems(): boolean {
        return this.orderedItemsCount > 0;
    }

    getOrderedItemCount(itemId: string): number | undefined {
        const orderedItem = this.orderedItems.find(orderedItem => orderedItem.itemId === itemId);
        return orderedItem && orderedItem.count;
    }
}

interface ShoppingBasketParams {
    orderedItems: {
        itemId: string;
        count: number;
    }[];
}
