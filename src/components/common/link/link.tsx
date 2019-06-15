import React from 'react';
import { css } from 'aphrodite/no-important';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { buttonStyles } from '../button/styles';
import { linkStyles as styles } from './styles';

type Props = {
    style?: object;
} & LinkProps;

export const Link = (props: Props) => {
    const { children, style, ...otherProps } = props;

    return (
        <RouterLink className={css(buttonStyles.container, styles.container, style)} {...otherProps}>
            {children}
        </RouterLink>
    );
};
