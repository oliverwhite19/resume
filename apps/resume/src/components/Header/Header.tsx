import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Button, Text, useTheme } from '@nextui-org/react';
import { ThemeSwitch, useMediaQuery } from 'core';
import { authorImage, authorName } from 'core/constants';
import { IHeader } from '../../../_content/Header';
import { useKBar } from 'kbar';

function Header({ heading, description }: IHeader) {
    const { theme } = useTheme();
    const { query } = useKBar();
    const isSmallButtonSize = useMediaQuery(650);

    return (
        <header>
            <HeadingWrapper>
                <H1
                    h1
                    css={{
                        textGradient: `45deg, ${theme.colors.text.value} 10%, ${theme.colors.primary.value} 60%`,
                    }}
                >
                    {heading}
                </H1>

                <ThemeSwitch />
            </HeadingWrapper>
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
        </header>
    );
}

export default Header;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    > button,
    > a > button {
        border-radius: 2px;
    }
`;

const HeadingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > label:last-of-type {
        margin-top: 8px;
    }
`;

const H1 = styled(Text)`
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 8px;
    padding-right: 1rem;
`;

const DescriptionWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const P = styled.p`
    margin-left: 0.875rem;
`;
