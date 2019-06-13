import React from "react";
import {PageHeader} from "modules/core/components/page/components/page-header";
import {css} from "aphrodite/no-important";
import {Link} from "modules/core/components/link/link";
import {urlConfig} from "configs/url";
import {shoppingBasketPageStyles as styles} from "./styles";
import {ShoppingMenuItem, ShoppingMenuItemId} from "modules/shopping-menu/entities/shopping-menu-item";
import {Command as CommandView} from "modules/core/components/command/command";
import {Command} from "modules/core/command/command";
import {ShoppingBasketOrderedItemsContainer} from "../ordered-items/order-items-container";

interface ShoppingBasketProps {
    addOrderCommand: Command;
    shoppingMenuDictionary: Map<ShoppingMenuItemId, ShoppingMenuItem>;
}

export const ShoppingBasketPage: React.FC<ShoppingBasketProps> = (props) => {

    const {
        addOrderCommand,
        shoppingMenuDictionary,
    } = props;

    return (<article className={css(styles.container)}>
        <PageHeader label="Basket"/>
        <ShoppingBasketOrderedItemsContainer shoppingMenuDictionary={shoppingMenuDictionary}/>
        <footer className={css(styles.footer)}>
            <Link to={urlConfig.shoppingMenu}>Menu</Link>
            <CommandView command={addOrderCommand}>Order</CommandView>
        </footer>
    </article>);
};
