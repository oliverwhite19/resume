import { data as headerData, IHeader } from '../../_content/Header';
import { data as otherExperienceDate, IOtherExperience } from '../../_content/Other-Experience';
import { data as skillsData, ISkills } from '../../_content/Skills';
import Header from '../components/Header';
import OtherExperienceSection from '../components/OtherExperienceSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import { toJob } from '../helpers';
import { EmploymentWithPositions } from '../types';

interface Props {
    header: IHeader;
    workExperience: EmploymentWithPositions[];
    otherExperience: IOtherExperience;
    skills: ISkills;
}

function Resume({ header, workExperience, otherExperience, skills }: Props) {
    return (
        <main>
            <Header hasResumeButtons={true} {...header} />
            <WorkExperienceSection companies={workExperience.map((experience) => toJob(experience))} />
            <OtherExperienceSection {...otherExperience} />
            <SkillsSection {...skills} />
        </main>
    );
}

export default Resume;

export async function getStaticProps() {
    const employmentQuery = await fetch(`${process.env.APP_URL}/api/employment`);
    return {
        props: {
            header: headerData,
            workExperience: await employmentQuery.json(),
            otherExperience: otherExperienceDate,
            skills: skillsData,
        },
        revalidate: 60,
    };
}
