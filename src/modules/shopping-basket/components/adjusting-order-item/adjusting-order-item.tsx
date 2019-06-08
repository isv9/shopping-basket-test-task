import React from "react";
import {css} from "aphrodite/no-important";
import {Button} from "../../../core/components/button/button";
import {shoppingBasketAdjustingOrderedItemCountStyles as styles} from "./styles";

interface ShoppingBasketAdjustingOrderedItemProps {
    value: number;

    adjust(adjustmentValue: number): void;
}

export const ShoppingBasketAdjustingOrderedItemCount
    : React.FC<ShoppingBasketAdjustingOrderedItemProps> = (props) => {

    const {
        adjust,
        value,
    } = props;

    return (<div className={css(styles.container)}>
        <Button style={styles.button} onClick={() => adjust(-1)}>-</Button>
        <span className={css(styles.adjustLabel)}>{value}</span>
        <Button style={styles.button} onClick={() => adjust(1)}>+</Button>
    </div>);
};