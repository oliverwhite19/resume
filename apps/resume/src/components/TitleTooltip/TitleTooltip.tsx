import React from 'react';
import { Button, Tooltip, useTheme, styled } from '@nextui-org/react';
import { Icon } from 'core';

interface Props {
    text: string;
    githubLink?: string;
    otherLink?: string;
}
const H2 = styled('h2', {
    color: '$primary',
    cursor: 'pointer',
    margin: 0,
});

function TitleTooltip({ text, githubLink, otherLink }: Props) {
    return githubLink || otherLink ? (
        <Tooltip
            placement="top"
            content={<TooltipContent githubLink={githubLink} otherLink={otherLink} />}
            hideArrow={false}
            color={'invert'}
        >
            <H2>{text}</H2>
        </Tooltip>
    ) : (
        <h3>{text}</h3>
    );
}

export default TitleTooltip;

interface TooltipProps {
    githubLink?: string;
    otherLink?: string;
}

export function TooltipContent({ githubLink, otherLink }: TooltipProps) {
    const { theme } = useTheme();

    return (
        <Div>
            {githubLink && (
                <a href={githubLink} rel="noreferrer" target="_blank">
                    <Button auto light icon={<Icon name="GithubLine" fill={theme.colors.accents4.value} />} />
                </a>
            )}
            {otherLink && (
                <a href={otherLink} rel="noreferrer" target="_blank">
                    <Button auto light icon={<Icon name="Link" fill={theme.colors.accents4.value} />} />
                </a>
            )}
        </Div>
    );
}

const Div = styled('div', {
    display: 'flex',
});
