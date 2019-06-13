import React, {useCallback} from "react";
import {css} from "aphrodite/no-important";
import {shoppingMenuItemCardStyles as styles} from "./styles";
import boxSvg from 'assets/images/box.svg';
import {Button} from "modules/core/components/button/button";
import {ShoppingMenuItem} from "modules/shopping-menu/entities/shopping-menu-item";
import {ShoppingBasketAdjustingOrderedItemCount} from "modules/shopping-basket/components/adjusting-order-item/adjusting-order-item";

interface ShoppingMenuItemCardProps {
    menuItem: ShoppingMenuItem;
    orderCount: number | undefined;
    style?: object;

    addMenuItem(menuItemId: string): void;

    adjustOrderedItem(orderedItemId: string, adjustmentValue: number): void;
}

export const ShoppingMenuItemCard: React.FC<ShoppingMenuItemCardProps> = (props) => {
    const {
        addMenuItem,
        adjustOrderedItem,
        menuItem,
        orderCount,
        style = {},
    } = props;
    const {
        id: menuItemId,
        name,
    } = menuItem;

    const onAdjust = useCallback((adjustmentValue: number) => adjustOrderedItem(menuItemId, adjustmentValue),
        [menuItemId, adjustOrderedItem]);

    const onAddMenuItem = useCallback(() => addMenuItem(menuItemId),
        [menuItemId, addMenuItem]);

    const action = orderCount
        ? <ShoppingBasketAdjustingOrderedItemCount
            value={orderCount}
            onAdjust={onAdjust}/>
        :
        <Button onClick={onAddMenuItem}>Add</Button>;

    return (<section className={css(styles.container, style)}>
        <div className={css(styles.iconContainer)}>
            <img src={boxSvg} className={css(styles.boxSvg)} alt="shopping menu item logo"/>
        </div>
        <h3>{name}</h3>
        <div className={css(styles.actionContainer)}>{action}</div>
    </section>);
};
