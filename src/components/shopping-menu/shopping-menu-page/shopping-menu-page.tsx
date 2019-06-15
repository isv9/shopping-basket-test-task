import React from 'react';
import { PageHeader } from '../../common/page/components/page-header';
import { css } from 'aphrodite/no-important';
import { ShoppingBasketIndicatorContainer } from '../../shopping-basket/indicator/basket-indicator-container';
import { shoppingMenuPageStyles as styles } from './styles';
import { ShoppingMenuContainer } from '../shopping-menu/shopping-menu-container';

export const ShoppingMenuPage = () => {
    return (
        <article className={css(styles.container)}>
            <PageHeader label="Menu" style={styles.header}>
                <ShoppingBasketIndicatorContainer />
            </PageHeader>
            <ShoppingMenuContainer shoppingMenuStyle={styles.shoppingMenuListContainer} />
        </article>
    );
};
