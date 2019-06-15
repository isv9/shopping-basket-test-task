import React, { ReactElement } from 'react';
import { css } from 'aphrodite/no-important';
import { pageHeaderStyles as styles } from './styles';

type Props = {
    label: string;
    style?: object;
    children?: ReactElement;
};

export const PageHeader = (props: Props) => {
    const { label, children, style } = props;
    return (
        <header className={css(styles.container, style)}>
            <h1 className={css(styles.header)}>{label}</h1>
            {children}
        </header>
    );
};
