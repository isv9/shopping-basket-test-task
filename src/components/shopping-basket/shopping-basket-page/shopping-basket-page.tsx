import React from 'react';
import { PageHeader } from '../../common/page/components/page-header';
import { css } from 'aphrodite/no-important';
import { Link } from '../../common/link/link';
import { urlConfig } from '../../../configs/url';
import { ShoppingBasketOrderedItemsContainer } from '../ordered-items/order-items-container';
import { shoppingBasketPageStyles as styles } from './styles';
import { ShoppingMenuItem, ShoppingMenuItemId } from '../../../entities/shopping-menu/shopping-menu-item';
import { Command as CommandView } from '../../common/command/command';
import { Command } from '../../../entities/command';

type Props = {
    addOrderCommand: Command;
    shoppingMenuDictionary: Map<ShoppingMenuItemId, ShoppingMenuItem>;
};

export const ShoppingBasketPage = (props: Props) => {
    const { addOrderCommand, shoppingMenuDictionary } = props;

    return (
        <article className={css(styles.container)}>
            <PageHeader label="Basket" />
            <ShoppingBasketOrderedItemsContainer shoppingMenuDictionary={shoppingMenuDictionary} />
            <footer className={css(styles.footer)}>
                <Link to={urlConfig.shoppingMenu}>Menu</Link>
                <CommandView command={addOrderCommand}>Order</CommandView>
            </footer>
        </article>
    );
};
