import React from "react";
import {OrderedItemViewModel} from "../../entities/ordered-item-view-model";
import {ShoppingBasketOrderedItemCard} from "../ordered-item-card/ordered-item-card";
import {css} from "aphrodite/no-important";
import {shoppingBasketOrderedItemsStyles as styles} from "./styles";

interface ShoppingBasketOrderedItemsProps {
    orderedItems: Array<OrderedItemViewModel>;

    adjustOrderedItem(itemId: string, adjustmentValue: number): void;

    removeOrderedItem(itemId: string): void;
}

export const ShoppingBasketOrderedItems: React.FC<ShoppingBasketOrderedItemsProps> = (props) => {
    const {
        adjustOrderedItem,
        orderedItems = [],
        removeOrderedItem,
    } = props;

    const orderItemsLastIndex = orderedItems.length - 1;

    const content = orderedItems.length === 0
        ? <span className={css(styles.noOrderItemsLabel)}>No ordered items</span>
        : orderedItems.map((orderItem, index) => {
            return <ShoppingBasketOrderedItemCard
                orderItem={orderItem}
                removeOrderedItem={removeOrderedItem}
                adjustOrderedItem={adjustOrderedItem}
                style={index !== orderItemsLastIndex ? styles.menuItem : undefined}
                key={orderItem.itemId}/>;
        });

    return (<article className={css(styles.container)}>
        {content}
    </article>);
};