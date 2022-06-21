import React from 'react';
import { styled } from '@nextui-org/react';

import Li from '../Li';
import TitleTooltip from '../TitleTooltip';
import { Position } from '../../../prisma/generated/client2';
import { format } from 'date-fns';

function Project({ title, start, end, details, technologies }: Position) {
    return (
        <Div>
            <TitleTooltip text={title} />
            <small>
                {format(start, 'LLLL yyy')} - {format(end, 'LLLL yyy')}
            </small>
            {details.length > 0 && (
                <ul data-testid="which wrapper">
                    {details.map((each, index) => (
                        <Li key={index}>{each}</Li>
                    ))}
                </ul>
            )}

            {technologies && technologies.length > 0 && (
                <TechDiv data-testid="tech stack wrapper">
                    {technologies.map((tech, index) => (
                        <TechSpan key={index}>{tech}</TechSpan>
                    ))}
                </TechDiv>
            )}
        </Div>
    );
}

export default Project;

const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.25rem',
});

const TechDiv = styled('div', {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
});

const TechSpan = styled('span', {
    padding: '0.125rem 0.5rem',
    backgroundColor: '$accents1',
    borderRadius: '32px',
    fontSize: '0.75rem',
});
