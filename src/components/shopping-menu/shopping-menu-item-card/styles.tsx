import { CSSProperties, StyleSheet } from 'aphrodite/no-important';

export const shoppingMenuItemCardContainerInRem = 14;

export const shoppingMenuItemCardStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        width: `${shoppingMenuItemCardContainerInRem}rem`,
        height: '16.5rem',
        display: 'flex',
        flexDirection: 'column',
    },
    boxSvg: {
        height: '10rem',
        opacity: 0.5,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    actionContainer: {
        alignSelf: 'flex-end',
    },
});
