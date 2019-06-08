import {CSSProperties, StyleSheet} from 'aphrodite/no-important';

export const buttonStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        border: '1px solid #ff6900',
        color: '#ff6900',
        borderRadius: '.6rem',
        height: '2.5rem',
        width: '6rem',
        textAlign: 'center',
        fontSize: '1rem',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        outline: 'none',
    },
    disabledButton: {
        opacity: .5,
        cursor: "auto",
    }
});