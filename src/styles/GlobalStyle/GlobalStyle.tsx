import { globalCss } from '@nextui-org/react';

export const globalStyle = globalCss({
    '*, *::before, *::after': {
        boxSizing: 'border-box',
    },
    html: {
        fontSize: '16px',
        wordBreak: 'keep-all',
        wordWrap: 'break-word',
        '-webkit-text-size-adjust': '100%',
    },
    body: {
        margin: 0,
        transition: 'background-color 0.4s, color 0.3s',
    },
    'ul, ol': {
        color: 'inherit',
    },
    'ul:not(.contains-task-list)': {
        listStyleType: 'disc',
    },
    '@xsMax': {
        html: {
            fontSize: '14px',
        },
    },
});
