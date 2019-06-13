import React from "react";
import {Command as CommandModel} from "modules/core/command/command";
import {Button, ButtonProps} from "modules/core/components/button/button";

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