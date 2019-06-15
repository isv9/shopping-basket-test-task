import React, { useCallback } from 'react';
import { css } from 'aphrodite/no-important';
import { Button } from '../../common/button/button';
import { shoppingBasketAdjustingOrderedItemCountStyles as styles } from './styles';

interface ShoppingBasketAdjustingOrderedItemProps {
    value: number;

    adjust(adjustmentValue: number): void;
}

export const ShoppingBasketAdjustingOrderedItemCount: React.FC<ShoppingBasketAdjustingOrderedItemProps> = props => {
    const { adjust, value } = props;

    const decrease = useCallback(() => adjust(-1), [adjust]);
    const increase = useCallback(() => adjust(1), [adjust]);

    return (
        <div className={css(styles.container)}>
            <Button style={styles.button} onClick={decrease}>
                -
            </Button>
            <span className={css(styles.adjustLabel)}>{value}</span>
            <Button style={styles.button} onClick={increase}>
                +
            </Button>
        </div>
    );
};
