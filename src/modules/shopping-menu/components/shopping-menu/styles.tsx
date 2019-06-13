import {CSSProperties, StyleSheet} from "aphrodite/no-important";
import {shoppingMenuItemCardContainerInRem} from "modules/shopping-menu/components/shopping-menu-item-card/styles";

const shoppingMenuItemGap = 1;

export const shoppingMenuStyles = StyleSheet.create<{ [key: string]: CSSProperties }>({
    container: {
        maxWidth: calcMaxWidthByColumnsCount(5),
        '@supports (display: grid)': {
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${shoppingMenuItemCardContainerInRem}rem, 1fr))`,
            gridGap: `${shoppingMenuItemGap}rem`,
            gridAutoRows: 'auto',
            alignItems: 'center',
            justifyItems: 'center',
            width: 'initial',
        },
        '@supports not (display: grid)': {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            ...getMediaListForShoppingMenuByColumnsCounts([4, 3, 2]),
            '@media (max-width: 570px)': {
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            },
        },
    },
    shoppingMenuItem: {
        '@supports not (display: grid)': {
            marginRight: `${shoppingMenuItemGap}rem`,
            marginBottom: `${shoppingMenuItemGap}rem`,
        },
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
    return `${columnsCount * (shoppingMenuItemCardContainerInRem + shoppingMenuItemGap)}rem`;
}