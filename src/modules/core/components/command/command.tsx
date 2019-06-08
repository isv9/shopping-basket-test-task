import React from "react";
import {Button, ButtonProps} from "../button/button";
import {Command as CommandModel} from "../../command/command";

interface CommandProps extends ButtonProps {
    command: CommandModel;
}

export const Command: React.FC<CommandProps> = (props) => {
    const {
        command,
        ...otherProps
    } = props;

    return (<Button
        onClick={command.execute}
        disabled={!command.isAvailable}
        {...otherProps}/>);
};