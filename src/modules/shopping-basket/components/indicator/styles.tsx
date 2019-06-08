import {CSSProperties, StyleSheet} from "aphrodite/no-important";

export const shoppingBasketIndicatorStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        border: '1px solid #ff6900',
        backgroundColor: '#ff6900',
        color: '#FFF',
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-around',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        textDecoration: 'none',
    },
    orderItemsCountContainer: {
        height: '65%',
        borderLeftStyle: "solid",
        borderLeftWidth: '1px',
        borderLeftColor: '#FFFFFF36',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '.5rem',
        marginLeft: '.5rem',
    },
    orderItemsCountLabel: {
        fontSize: '1rem',
    },
    shoppingBasketLabel: {
        fontSize: '1rem',
    }
});