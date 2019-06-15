import { CSSProperties, StyleSheet } from 'aphrodite/no-important';

export const shoppingBasketOrderedItemStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    removeBtnSvg: {
        height: '2rem',
        opacity: 0.5,
    },
    nameContainer: {
        flex: 1,
    },
    nameLabel: {
        fontSize: '1rem',
    },
    adjustContainer: {
        flex: '.3',
    },
    removeButtonContainer: {
        flex: '.3',
    },
    removeButton: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
    },
});
