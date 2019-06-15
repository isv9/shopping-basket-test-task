import React from 'react';
import { Button } from '../button/button';
import { Command as CommandModel } from '../../../entities/command';

type Props = { command: CommandModel } & Parameters<typeof Button>[0];

export const Command = (props: Props) => {
    const { command, ...otherProps } = props;

    return <Button onClick={command.execute} disabled={!command.isAvailable} {...otherProps} />;
};
