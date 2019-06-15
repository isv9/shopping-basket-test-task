export interface ServiceShoppingBasketDTO {
    orderedItems: {
        itemId: string;
        count: number;
    }[];
}

export interface AddingOrderedItemToShoppingBasketInputDTO {
    orderedItemId: string;
}

export interface AdjustingOrderedItemInShoppingBasketInputDTO {
    orderedItemId: string;
    adjustmentValue: number;
}

export interface RemovingOrderedItemFromShoppingBasketInputDTO {
    orderedItemId: string;
}
