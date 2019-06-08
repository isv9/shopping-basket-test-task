export interface ServiceShoppingBasketDTO {
    orderedItems: Array<{
        itemId: string;
        count: number;
    }>
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