import { PrismaClient } from '../../prisma/generated/client2';
import { data as headerData, IHeader } from '../../_content/Header';
import Header from '../components/Header';
import OtherExperienceSection from '../components/OtherExperienceSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import { toEducation, toJob } from '../helpers';

interface Props {
    header: IHeader;
    workExperience: string;
    otherExperience: string;
}

function Resume({ header, workExperience, otherExperience }: Props) {
    return (
        <main>
            <Header hasResumeButtons={true} {...header} />
            <WorkExperienceSection companies={JSON.parse(workExperience)?.map((experience) => toJob(experience))} />
            <OtherExperienceSection
                title={JSON.parse(otherExperience)?.title}
                list={toEducation(JSON.parse(otherExperience)?.list)}
            />
        </main>
    );
}

export default Resume;

export async function getStaticProps() {
    const prisma = new PrismaClient();
    const employmentData = await prisma.employment.findMany({
        include: { positions: true },
        orderBy: { index: 'asc' },
    });
    const educationData = await prisma.education.findMany();
    return {
        props: {
            header: headerData,
            workExperience: JSON.stringify(employmentData),
            otherExperience: JSON.stringify({ title: 'Eductation', list: educationData }),
        },
        revalidate: 60,
    };
}
