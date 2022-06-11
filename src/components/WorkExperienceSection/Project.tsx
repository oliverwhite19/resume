import React from 'react';
import { styled } from '@nextui-org/react';

import { IProject } from '../../../_content/Work-Experience';
import Li from '../Li';
import TitleTooltip from '../TitleTooltip';

function Project({ title, startDate, endDate, which, techStack }: IProject) {
    return (
        <Div>
            <TitleTooltip {...title} />
            <small>
                {startDate} - {endDate}
            </small>
            {which.length > 0 && (
                <ul data-testid="which wrapper">
                    {which.map((each, index) => (
                        <Li key={index}>{each}</Li>
                    ))}
                </ul>
            )}

            {techStack && techStack.length > 0 && (
                <TechDiv data-testid="tech stack wrapper">
                    {techStack.map((tech, index) => (
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
