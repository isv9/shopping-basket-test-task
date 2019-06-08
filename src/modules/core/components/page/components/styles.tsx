import {CSSProperties, StyleSheet} from "aphrodite/no-important";

export const pageHeaderStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    header: {
        flex: 1
    }
});