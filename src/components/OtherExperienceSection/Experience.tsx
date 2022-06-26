import React from 'react';
import { styled } from '@nextui-org/react';
import TitleTooltip from '../TitleTooltip';
import { Education } from '../../../prisma/generated/client2';
import { format } from 'date-fns';

function Experience({ title, link, end, description }: Education) {
    return (
        <Div>
            <TitleTooltip text={title} otherLink={link} />
            <small>{format(end, 'LLLL yyy')}</small>
            <p>{description}</p>
        </Div>
    );
}

export default Experience;

const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '2rem',
    '> div:first-of-type': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    textAlign: 'center',
});
