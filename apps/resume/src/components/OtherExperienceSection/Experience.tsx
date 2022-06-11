import React from 'react';
import { styled } from '@nextui-org/react';
import { IExperience } from '../../../_content/Other-Experience';
import Li from '../Li';
import TitleTooltip from '../TitleTooltip';

function Experience({ title, endDate, description, which }: IExperience) {
    return (
        <Div>
            <TitleTooltip {...title} />
            <small>{endDate}</small>
            <p>{description}</p>
            {which.length > 0 && (
                <ul>
                    {which.map((each, index) => (
                        <Li key={index}>{each}</Li>
                    ))}
                </ul>
            )}
        </Div>
    );
}

export default Experience;

const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
    '> div:first-of-type': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    textAlign: 'center',
});
