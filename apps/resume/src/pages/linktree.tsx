import Header from '../components/Header';
import { data as headerData } from '../../_content/Header';
import { Button } from '@nextui-org/react';
import { styled } from '@stitches/react';
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
            <Header isLinktree {...header} />
            <LinkWrapper>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <Button>Website</Button>
                </a>
                <a href="https://twitter.com/olw_gg" target="_blank" rel="noopener noreferrer">
                    <Button>Twitter</Button>
                </a>
            </LinkWrapper>
            <SocialWrapper>
                <SocialIcon url="https://twitter.com/olw_gg" bgColor="#e53020" network="twitter" />
                <SocialIcon url="https://github.com/oliverwhite19" bgColor="#e53020" network="github" />
                <SocialIcon
                    url="https://www.linkedin.com/in/oliver-white-453a1221a/"
                    bgColor="#e53020"
                    network="linkedin"
                />
                <SocialIcon url="mailto:oliverwhite93@gmail.com" bgColor="#e53020" network="email" />
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
