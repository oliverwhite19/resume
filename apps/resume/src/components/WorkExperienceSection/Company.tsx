import React from 'react';
import styled from '@emotion/styled';
import { Button, NextUITheme, useTheme, Tooltip } from '@nextui-org/react';
import { ICompany } from '../../../_content/Work-Experience';
import { TooltipContent } from '../TitleTooltip/TitleTooltip';

const StyledButton = styled(Button)`
    padding-left: 0;
    padding-right: 2px;
`;

function Company({ name, description, link }: Omit<ICompany, 'projects'>) {
    const { theme } = useTheme();

    return (
        <CompanyCard data-testid="wrapper">
            {link ? (
                <Tooltip placement="top" content={<TooltipContent otherLink={link} />} color={'invert'}>
                    <StyledButton auto light color="primary" animated={false}>
                        <h3>{name}</h3>
                    </StyledButton>
                </Tooltip>
            ) : (
                <h3>{name}</h3>
            )}
            <P theme={theme}>{description}</P>
        </CompanyCard>
    );
}

export default Company;

const CompanyCard = styled.div`
    text-align: center;
    > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
`;

const P = styled.p<{ theme: NextUITheme | undefined }>`
    color: ${({ theme }) => theme.colors.accents6.value};
`;
