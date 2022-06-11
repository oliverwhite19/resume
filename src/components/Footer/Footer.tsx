import React from 'react';
import { Link, styled } from '@nextui-org/react';
import { authorName, defaultUrl } from '../../constants/General';

const StyledFooter = styled('footer', {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100px',
    padding: '0 0 1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontSize: '0.75rem',
    '@xsMax': {
        paddingBottom: '0.5rem',
    },
});

export function Footer() {
    const date = new Date();

    return (
        <StyledFooter>
            <span>
                Copyright &copy; {date.getFullYear()}{' '}
                <Link href={defaultUrl} target="_blank">
                    {authorName}
                </Link>{' '}
                All rights reserved.
            </span>
        </StyledFooter>
    );
}
