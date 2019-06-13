import React from "react";
import {PageHeader} from "modules/core/components/page/components/page-header";
import {css} from "aphrodite/no-important";
import {ShoppingBasketIndicatorContainer} from "modules/shopping-basket/components/indicator/basket-indicator-container";
import {shoppingMenuPageStyles as styles} from "./styles";
import {ShoppingMenuContainer} from "modules/shopping-menu/components/shopping-menu/shopping-menu-container";

export const ShoppingMenuPage: React.FC = () => {
    return (<article className={css(styles.container)}>
        <PageHeader label="Menu" style={styles.header}>
            <ShoppingBasketIndicatorContainer/>
        </PageHeader>
        <ShoppingMenuContainer shoppingMenuStyle={styles.shoppingMenuListContainer}/>
    </article>);
};


