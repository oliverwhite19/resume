import React from 'react';

import { EducationWithTitle } from '../../types';
import Section from '../Section';
import Experience from './Experience';

function OtherExperienceSection({ title, list }: EducationWithTitle) {
    return (
        <Section>
            <h2>{title}</h2>

            {list?.map((experience, index) => (
                <Experience key={index} {...experience} />
            ))}
        </Section>
    );
}

export default OtherExperienceSection;
