import React from 'react';
import { styled } from '@nextui-org/react';

import { ISkill } from '../../../_content/Skills';
import Li from '../Li';

function Skill({ name, descriptions }: ISkill) {
    return (
        <Div>
            <h3>{name}</h3>
            <ul>
                {descriptions.map((description, index) => (
                    <Li key={index}>{description}</Li>
                ))}
            </ul>
        </Div>
    );
}

export default Skill;

const Div = styled('div', {
    marginBottom: '2rem',
});
