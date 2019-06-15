import React from 'react';
import { css } from 'aphrodite';

type Props = {
    style?: object;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const IconButton = (props: Props) => {
    const { children, disabled, style, ...otherProps } = props;

    return (
        <button type="button" className={css(style)} disabled={disabled} {...otherProps}>
            {children}
        </button>
    );
};
