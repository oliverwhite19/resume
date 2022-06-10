import React from 'react';
import styled from '@emotion/styled';
import { config, Link } from '@nextui-org/react';

import { authorName, defaultUrl } from '../../constants';

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
            <span>
                Powered By{' '}
                <Link href="https://github.com/hyesungoh/comet-land" target="_blank">
                    @Comet-land
                </Link>
            </span>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100px;
    padding: 0 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.75rem;

    @media ${config.media.xsMax} {
        padding-bottom: 0.5rem;
    }
`;
