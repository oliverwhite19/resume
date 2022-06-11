import React from 'react';
import { Avatar, Button, useTheme, styled } from '@nextui-org/react';
import { IHeader } from '../../../_content/Header';
import { useKBar } from 'kbar';
import { ThemeSwitch } from '../ThemeSwitch';
import { useMediaQuery } from '../../hooks';
import { authorImage, authorName } from '../../constants/General';

const ButtonWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1rem',
    ['> button, > a > button']: {
        borderRadius: '2px',
    },
});

const HeadingWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    ['& > label:last-of-type']: {
        marginTop: '8px',
    },
});

const H1 = styled('h1', {
    fontSize: '3rem',
    lineHeight: '3rem',
    marginBottom: '8px',
    paddingRight: '1rem',
});

const DescriptionWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',
});

const P = styled('p', {
    marginLeft: '0.875rem',
});

function Header({ heading, description, isLinktree }: IHeader) {
    const { theme } = useTheme();
    const { query } = useKBar();
    const isSmallButtonSize = useMediaQuery(650);

    return (
        <header>
            <HeadingWrapper>
                <H1
                    css={{
                        textGradient: `45deg, ${theme.colors.text.value} 10%, ${theme.colors.primary.value} 60%`,
                    }}
                >
                    {heading}
                </H1>

                <ThemeSwitch />
            </HeadingWrapper>
            {isLinktree ? (
                <></>
            ) : (
                <>
                    <ButtonWrapper>
                        <a href="/files/OliverWhiteResume.pdf" target="_blank" rel="noopener noreferrer">
                            <Button auto size={isSmallButtonSize ? 'md' : 'lg'}>
                                Download PDF Resume
                            </Button>
                        </a>

                        <Button auto onClick={() => query.toggle()} size={isSmallButtonSize ? 'md' : 'lg'}>
                            Contact
                        </Button>
                    </ButtonWrapper>
                    <DescriptionWrapper>
                        <Avatar src={authorImage.default.src} alt={authorName} text={authorName} size="xl" />
                        <P dangerouslySetInnerHTML={{ __html: description }}></P>
                    </DescriptionWrapper>
                </>
            )}
        </header>
    );
}

export default Header;