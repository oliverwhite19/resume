import { PropsWithChildren } from 'react';
import { styled } from '@nextui-org/react';

const Div = styled('div', {
    position: 'relative',
    maxWidth: '960px',
    width: '100%',
    minHeight: '100vh',
    margin: '0 auto',
    padding: '2rem 1.3125rem 100px 0',
    '@media(max-width: 1100px)': {
        paddingLeft: '65px',
        marginLeft: 0,
    },
});

export function Layout({ children }: PropsWithChildren<unknown>) {
    return <Div>{children}</Div>;
}
