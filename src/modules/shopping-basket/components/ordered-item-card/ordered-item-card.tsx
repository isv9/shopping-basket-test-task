import React, {useCallback} from "react";
import {css} from "aphrodite/no-important";
import {shoppingBasketOrderedItemStyles as styles} from "./styles";
import {OrderedItemViewModel} from "modules/shopping-basket/entities/ordered-item-view-model";
import {ShoppingBasketAdjustingOrderedItemCount} from "modules/shopping-basket/components/adjusting-order-item/adjusting-order-item";

interface ShoppingBasketOrderedItemCardProps {
    orderItem: OrderedItemViewModel;
    style?: object;

    adjustOrderedItem(itemId: string, adjustmentValue: number): void;

    removeOrderedItem(itemId: string): void;
}

const removeSvg = require('../../../../assets/images/remove.svg');

export const ShoppingBasketOrderedItemCard: React.FC<ShoppingBasketOrderedItemCardProps> = (props) => {
    const {
        adjustOrderedItem,
        orderItem,
        removeOrderedItem,
        style,
    } = props;
    const {
        itemId,
        name,
        orderedCount
    } = orderItem;

    const onAdjust = useCallback((adjustmentValue: number) => adjustOrderedItem(itemId, adjustmentValue),
        [itemId, adjustOrderedItem]);

    return (<section className={css(styles.container, style)}>
        <div className={css(styles.nameContainer)}>
            <span className={css(styles.nameLabel)}>{name}</span>
        </div>
        <div className={css(styles.adjustContainer)}>
            {!!orderedCount && <ShoppingBasketAdjustingOrderedItemCount
                value={orderedCount}
                onAdjust={onAdjust}/>}
        </div>
        <div className={css(styles.container)}>
            <button onClick={() => removeOrderedItem(itemId)}
                    className={css(styles.removeButton)}>
                <img src={removeSvg}
                     className={css(styles.removeBtnSvg)}
                     alt="remove ordered item"/>
            </button>
        </div>
    </section>);
};