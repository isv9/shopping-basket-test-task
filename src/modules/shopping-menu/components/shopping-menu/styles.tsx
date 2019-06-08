import {CSSProperties, StyleSheet} from "aphrodite/no-important";
import {shoppingMenuItemCardContainerInRem} from "../shopping-menu-item-card/styles";

const shoppingMenuItemRightGap = 1;
const shoppingMenuItemBottomGap = 1;

export const shoppingMenuStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        maxWidth: calcMaxWidthByColumnsCount(5),
        ...getMediaListForShoppingMenuByColumnsCounts([4, 3, 2]),
        '@media (max-width: 570px)': {
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        },
    },
    shoppingMenuItem: {
        marginRight: `${shoppingMenuItemRightGap}rem`,
        marginBottom: `${shoppingMenuItemBottomGap}rem`,
    },
});

export function getMediaListForShoppingMenuByColumnsCounts(columnsCounts: Array<number>): { [key: string]: CSSProperties } {
    return columnsCounts.reduce<{ [key: string]: CSSProperties }>((result, columnsCount) => {
        const maxWidth = 800 + 240 * (columnsCount - 2);
        const styleMedia = `@media (max-width: ${maxWidth}px)`;
        result[styleMedia] = {
            maxWidth: calcMaxWidthByColumnsCount(columnsCount),
        };
        return result;
    }, {});
}

function calcMaxWidthByColumnsCount(columnsCount: number): string {
    return `${columnsCount * (shoppingMenuItemCardContainerInRem + shoppingMenuItemRightGap)}rem`;
}