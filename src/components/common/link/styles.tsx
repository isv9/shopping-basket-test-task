import { CSSProperties, StyleSheet } from 'aphrodite/no-important';

export const linkStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        borderColor: 'grey',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
    },
});
