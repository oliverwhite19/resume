import React from 'react';

import Section from '../Section';
import Skill from './Skill';

function SkillsSection({ title, list }) {
    return (
        <Section>
            <h2>{title}</h2>
            {list.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </Section>
    );
}

export default SkillsSection;
