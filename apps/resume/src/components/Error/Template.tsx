import React from 'react';
import NextLink from 'next/link';
import { Link, styled } from '@nextui-org/react';

interface Props {
    errorTitle: string;
    paragraph: string;
    anchorMessage: string;
}

export function ErrorTemplate({ errorTitle, paragraph, anchorMessage }: Props) {
    return (
        <Main>
            <H1>{errorTitle}</H1>
            <Div>
                <p data-testid="paragraph">{paragraph}</p>
                <NextLink href="/" passHref>
                    <Link>{anchorMessage}</Link>
                </NextLink>
            </Div>
        </Main>
    );
}

const Main = styled('main', {
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const Div = styled('div', {
    paddingLeft: '32px',
});

const H1 = styled('h1', {
    fontSize: '4rem',
    borderRadius: 'solid $text 4px',
    padding: '0 32px',
    margin: 0,
});
