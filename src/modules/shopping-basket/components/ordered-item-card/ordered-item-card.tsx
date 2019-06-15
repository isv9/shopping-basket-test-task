import React, { useCallback } from 'react';
import { OrderedItemViewModel } from '../../entities/ordered-item-view-model';
import { ShoppingBasketAdjustingOrderedItemCount } from '../adjusting-order-item/adjusting-order-item';
import { css } from 'aphrodite/no-important';
import { shoppingBasketOrderedItemStyles as styles } from './styles';
import removeSvg from '../../../../assets/images/remove.svg';

interface ShoppingBasketOrderedItemCardProps {
    orderItem: OrderedItemViewModel;
    style?: object;

    adjustOrderedItem(itemId: string, adjustmentValue: number): void;

    removeOrderedItem(itemId: string): void;
}

export const ShoppingBasketOrderedItemCard: React.FC<ShoppingBasketOrderedItemCardProps> = props => {
    const { adjustOrderedItem, orderItem, removeOrderedItem, style } = props;
    const { itemId, name, orderedCount } = orderItem;

    const adjust = useCallback((adjustmentValue: number) => adjustOrderedItem(itemId, adjustmentValue), [
        itemId,
        adjustOrderedItem,
    ]);

    return (
        <section className={css(styles.container, style)}>
            <div className={css(styles.nameContainer)}>
                <span className={css(styles.nameLabel)}>{name}</span>
            </div>
            <div className={css(styles.adjustContainer)}>
                {!!orderedCount && <ShoppingBasketAdjustingOrderedItemCount value={orderedCount} adjust={adjust} />}
            </div>
            <div className={css(styles.container)}>
                <button type="button" onClick={() => removeOrderedItem(itemId)} className={css(styles.removeButton)}>
                    <img src={removeSvg} className={css(styles.removeBtnSvg)} alt="remove ordered item" />
                </button>
            </div>
        </section>
    );
};
