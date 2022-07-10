import { PropsWithChildren } from 'react';
import { styled } from '@nextui-org/react';

const Div = styled('div', {
    position: 'relative',
    maxWidth: '960px',
    width: '100%',
    minHeight: '100vh',
    margin: '0 auto',
    padding: '2rem 1.3125rem 100px 1.3125rem',
    '@media(max-width: 1000px)': {
        padding: '52px 1.3125rem 100px 1.3125rem',
    },
});

export function Layout({ children }: PropsWithChildren<unknown>) {
    return <Div>{children}</Div>;
}
