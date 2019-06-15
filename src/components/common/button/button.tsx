import React from 'react';
import { css } from 'aphrodite/no-important';
import { buttonStyles } from './styles';

type Props = {
    style?: object;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = (props: Props) => {
    const { children, disabled, style, ...otherProps } = props;

    return (
        <button
            type="button"
            className={css(buttonStyles.container, disabled && buttonStyles.disabledButton, style)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
