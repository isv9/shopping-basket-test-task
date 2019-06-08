import {CSSProperties, StyleSheet} from "aphrodite/no-important";

export const shoppingBasketOrderedItemsStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        display: 'flex',
        flexDirection: "column",
        paddingBottom: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #e1e1e1',
        borderBottom: '1px solid #e1e1e1',
    },
    menuItem: {
        marginBottom: '.9rem'
    },
    noOrderItemsLabel: {
        fontSize: '1 rem',
    },
});