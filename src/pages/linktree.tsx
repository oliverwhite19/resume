import Header from '../components/Header';
import { data as headerData } from '../../_content/Header';
import { Button, styled } from '@nextui-org/react';
import { SocialIcon } from 'react-social-icons';

const LinkWrapper = styled('div', {
    marginBottom: '3rem',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [`& ${Button}`]: {
        marginTop: '1rem',
        borderRadius: '2px',
        width: '100%',
    },
});
const SocialWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [`& a`]: {
        margin: '0 0.5rem',
    },
});

const Linktree = ({ header }) => {
    return (
        <>
            <Header hasResumeButtons={false} {...header} />
            <LinkWrapper>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Button>Resume</Button>
                </a>
                <a href="https://twitter.com/olw_gg" target="_blank" rel="noopener noreferrer">
                    <Button>Twitter</Button>
                </a>
            </LinkWrapper>
            <SocialWrapper>
                <SocialIcon url="https://twitter.com/olw_gg" network="twitter" />
                <SocialIcon url="https://github.com/oliverwhite19" network="github" />
                <SocialIcon url="https://www.linkedin.com/in/oliver-white-453a1221a/" network="linkedin" />
                <SocialIcon url="mailto:oliverwhite93@gmail.com" network="email" />
            </SocialWrapper>
        </>
    );
};

export default Linktree;

export async function getStaticProps() {
    return {
        props: {
            header: headerData,
        },
    };
}
