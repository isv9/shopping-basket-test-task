import { CSSProperties, StyleSheet } from 'aphrodite/no-important';

export const shoppingMenuPageStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        marginLeft: '2rem',
        marginRight: '2rem',
    },
    header: {
        position: 'fixed',
        width: 'calc(100% - 2rem)',
        top: 0,
        left: '1rem',
        right: 0,
        zIndex: 1,
    },
    shoppingMenuListContainer: {
        marginTop: '4.5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
