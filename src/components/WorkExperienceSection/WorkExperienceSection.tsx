import React from 'react';
import Section from '../Section';
import Project from './Project';
import TitleTooltip from '../TitleTooltip';
import { styled } from '@nextui-org/react';
import { EmploymentWithPositions } from '../../types';

const CompanyCard = styled('div', {
    textAlign: 'center',
    '> div': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
});

const CompanyWrapper = styled('div', {
    marginBottom: '2rem',
    '& > div:first-of-type': {
        height: 'auto',
    },
    '@smMax': {
        flexDirection: 'column',
    },
});

const ProjectWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: '12px',
    '@smMax': {
        paddingLeft: '1rem',
        borderLeft: 'solid 3px  $primary',
    },
});

const P = styled('p', {
    color: '$accents6',
});

function WorkExperienceSection({ companies }: { companies: EmploymentWithPositions[] }) {
    return (
        <Section>
            <h2>Professional Experience</h2>
            {companies?.map((company, index) => (
                <CompanyWrapper key={index}>
                    <CompanyCard data-testid="wrapper">
                        <TitleTooltip text={company.company} otherLink={company.companyLink} />
                        <P>{company.descriptor}</P>
                    </CompanyCard>
                    <ProjectWrapper>
                        {company.positions.map((position, index) => (
                            <Project key={index} {...position} />
                        ))}
                    </ProjectWrapper>
                </CompanyWrapper>
            ))}
        </Section>
    );
}

export default WorkExperienceSection;
