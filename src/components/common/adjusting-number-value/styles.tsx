import { CSSProperties, StyleSheet } from 'aphrodite/no-important';

export const shoppingBasketAdjustingOrderedItemCountStyles = StyleSheet.create<{
    [key: string]: CSSProperties;
}>({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '7rem',
    },
    button: {
        width: '2.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    adjustLabel: {
        fontSize: '1rem',
    },
});
