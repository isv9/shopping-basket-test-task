import React, { useCallback } from 'react';
import { OrderedItemViewModel } from '../../../entities/shopping-basket/ordered-item-view-model';
import { AdjustingNumberValue } from '../../common/adjusting-number-value/adjusting-order-item';
import { css } from 'aphrodite/no-important';
import { shoppingBasketOrderedItemStyles as styles } from './styles';
import removeSvg from '../../../assets/images/remove.svg';
import { IconButton } from '../../common/icon-button/button';

type Props = {
    orderItem: OrderedItemViewModel;
    style?: object;

    adjustOrderedItem(itemId: string, adjustmentValue: number): void;

    removeOrderedItem(itemId: string): void;
};

export const ShoppingBasketOrderedItemCard = (props: Props) => {
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
                {!!orderedCount && <AdjustingNumberValue value={orderedCount} adjust={adjust} />}
            </div>
            <div className={css(styles.container)}>
                <IconButton onClick={() => removeOrderedItem(itemId)} className={css(styles.removeButton)}>
                    <img src={removeSvg} className={css(styles.removeBtnSvg)} alt="remove ordered item" />
                </IconButton>
            </div>
        </section>
    );
};
