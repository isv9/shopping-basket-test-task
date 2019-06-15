import React from 'react';
import { css } from 'aphrodite/no-important';
import { Link } from '../../common/link/link';
import { urlConfig } from '../../../configs/url';
import { shoppingBasketIndicatorStyles as styles } from './styles';

interface ShoppingBasket {
    hasOrderedItems: boolean;
    orderedItemsCount: number;
}

type Props = {
    shoppingBasket: ShoppingBasket;
};

export const ShoppingBasketIndicator = (props: Props) => {
    const { shoppingBasket } = props;
    return (
        <Link to={urlConfig.shoppingBasket} style={styles.container}>
            <span className={css(styles.shoppingBasketLabel)}>Basket</span>
            {shoppingBasket.hasOrderedItems && (
                <div className={css(styles.orderItemsCountContainer)}>
                    <span className={css(styles.orderItemsCountLabel)}>{shoppingBasket.orderedItemsCount}</span>
                </div>
            )}
        </Link>
    );
};
