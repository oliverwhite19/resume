import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@nextui-org/react';

import { IExperience } from '../../../_content/Other-Experience';
import Li from '../Li';
import TitleTooltip from '../TitleTooltip';

function Experience({ title, position, startDate, endDate, description, which }: IExperience) {
    const { theme } = useTheme();

    return (
        <Div>
            <TitleTooltip {...title} />
            <small>{endDate}</small>
            <p>{description}</p>
            {which.length > 0 && (
                <ul>
                    {which.map((each, index) => (
                        <Li key={index} theme={theme}>
                            {each}
                        </Li>
                    ))}
                </ul>
            )}
        </Div>
    );
}

export default Experience;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    > div:first-of-type {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    text-align: center;
`;
