import { styled } from '@nextui-org/react';

const li: any = styled('li', {
    listStyleType: 'none',
    position: 'relative',
    '&::before': {
        content: '',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: 0,
        transform: 'translate(-300%, -50%)',
        width: '5px',
        height: '5px',
        borderRadius: '10px',
        backgroundColor: '$primary',
    },
});

export default li;
