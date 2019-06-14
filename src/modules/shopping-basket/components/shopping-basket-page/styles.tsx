import { CSSProperties, StyleSheet } from 'aphrodite/no-important';

export const shoppingBasketPageStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        width: '90%',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '1rem',
    },
});
