import React from 'react';
import { PageHeader } from '../../../core/components/page/components/page-header';
import { css } from 'aphrodite/no-important';
import { Link } from '../../../core/components/link/link';
import { urlConfig } from '../../../../configs/url';
import { ShoppingBasketOrderedItemsContainer } from '../ordered-items/order-items-container';
import { shoppingBasketPageStyles as styles } from './styles';
import { ShoppingMenuItem, ShoppingMenuItemId } from '../../../shopping-menu/entities/shopping-menu-item';
import { Command as CommandView } from '../../../core/components/command/command';
import { Command } from '../../../core/command/command';

interface ShoppingBasketProps {
    addOrderCommand: Command;
    shoppingMenuDictionary: Map<ShoppingMenuItemId, ShoppingMenuItem>;
}

export const ShoppingBasketPage: React.FC<ShoppingBasketProps> = props => {
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
