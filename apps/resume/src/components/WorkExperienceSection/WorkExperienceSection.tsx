import React from 'react';
import { IWorkExperience } from '../../../_content/Work-Experience';
import Section from '../Section';
import Project from './Project';
import TitleTooltip from '../TitleTooltip';
import { styled } from '@stitches/react';

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
    '@media (max-width: 650px)': {
        flexDirection: 'column',
    },
});

const ProjectWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    gap: '12px',
    '@media (max-width: 650px)': {
        paddingLeft: '1rem',
        borderLeft: 'solid 3px var(--nextui-colors-primary)',
    },
});

const P = styled('p', {
    color: 'var(--nextui-colors-accents6)',
});

function WorkExperienceSection({ title, list }: IWorkExperience) {
    return (
        <Section>
            <h2>{title}</h2>
            {list.map((company, index) => (
                <CompanyWrapper key={index}>
                    <CompanyCard data-testid="wrapper">
                        <TitleTooltip text={company.name} otherLink={company.link} />
                        <P>{company.description}</P>
                    </CompanyCard>
                    <ProjectWrapper>
                        {company.projects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </ProjectWrapper>
                </CompanyWrapper>
            ))}
        </Section>
    );
}

export default WorkExperienceSection;
