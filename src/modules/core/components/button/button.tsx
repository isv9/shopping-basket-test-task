import React from "react";
import {css} from 'aphrodite/no-important';
import {buttonStyles} from "./styles";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    style?: object;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        children,
        disabled,
        style,
        ...otherProps
    } = props;

    return (<button
        className={css(
            buttonStyles.container,
            disabled && buttonStyles.disabledButton,
            style)}
        disabled={disabled}
        {...otherProps}>{children}</button>);
};
