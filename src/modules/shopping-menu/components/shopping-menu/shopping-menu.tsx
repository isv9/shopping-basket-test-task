import React from "react";
import {ShoppingMenuItemCard} from "../shopping-menu-item-card/shopping-menu-item-card";
import {ShoppingMenuItem} from "../../entities/shopping-menu-item";
import {css} from "aphrodite/no-important";
import {shoppingMenuStyles as styles} from "./styles";

interface ShoppingMenuProps {
    menu: Array<ShoppingMenuItem>;
    style?: object;

    addMenuItem(menuItemId: string): void;

    getOrderedItemCount(orderedItemId: string): number | undefined;

    adjustOrderedItem(orderedItemId: string, adjustmentValue: number): void;
}

export const ShoppingMenu: React.FC<ShoppingMenuProps> = (props) => {
    const {
        addMenuItem,
        adjustOrderedItem,
        getOrderedItemCount,
        menu = [],
        style,
    } = props;

    return (<article className={css(styles.container, style)}>
        {menu.map(menuItem => {
            return <ShoppingMenuItemCard
                addMenuItem={addMenuItem}
                adjustOrderedItem={adjustOrderedItem}
                menuItem={menuItem}
                orderCount={getOrderedItemCount(menuItem.id)}
                style={styles.shoppingMenuItem}
                key={menuItem.id}/>;
        })}
    </article>);
};