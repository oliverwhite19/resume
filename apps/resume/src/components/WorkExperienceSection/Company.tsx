import React from 'react';
import styled from '@emotion/styled';
import { config, NextUITheme, useTheme } from '@nextui-org/react';

import { ICompany } from '../../../_content/Work-Experience';

function Company({ name, description, link }: Omit<ICompany, 'projects'>) {
    const { theme } = useTheme();

    return (
        <CompanyCard data-testid="wrapper">
            <h3>
                {link ? (
                    <a target="_blank" href={link}>
                        {name}
                    </a>
                ) : (
                    name
                )}
            </h3>
            <P theme={theme}>{description}</P>
        </CompanyCard>
    );
}

export default Company;

const CompanyCard = styled.div`
    text-align: center;
`;

const P = styled.p<{ theme: NextUITheme | undefined }>`
    color: ${({ theme }) => theme.colors.accents6.value};
`;
