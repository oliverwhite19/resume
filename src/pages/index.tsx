import { data as headerData, IHeader } from '../../_content/Header';
import Header from '../components/Header';
import OtherExperienceSection from '../components/OtherExperienceSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import { toEducation, toJob } from '../helpers';
import { EducationWithTitle, EmploymentWithPositions } from '../types';

interface Props {
    header: IHeader;
    workExperience: EmploymentWithPositions[];
    otherExperience: EducationWithTitle;
}

function Resume({ header, workExperience, otherExperience }: Props) {
    return (
        <main>
            <Header hasResumeButtons={true} {...header} />
            <WorkExperienceSection companies={workExperience.map((experience) => toJob(experience))} />
            <OtherExperienceSection title={otherExperience.title} list={toEducation(otherExperience.list)} />
        </main>
    );
}

export default Resume;

export async function getStaticProps() {
    const employmentQuery = await fetch(`${process.env.APP_URL}/api/employment`);
    const educationQuery = await fetch(`${process.env.APP_URL}/api/education`);
    return {
        props: {
            header: headerData,
            workExperience: await employmentQuery.json(),
            otherExperience: await educationQuery.json(),
        },
        revalidate: 60,
    };
}
