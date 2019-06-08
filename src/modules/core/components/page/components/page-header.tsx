import React from "react";
import {css} from "aphrodite/no-important";
import {pageHeaderStyles as styles} from "./styles";

interface PageHeaderProps {
    label: string;
    style?: object;
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const {
        label,
        children,
        style
    } = props;
    return (
        <header className={css(styles.container, style)}>
            <h1 className={css(styles.header)}>{label}</h1>
            {children}
        </header>
    );
};