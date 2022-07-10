import React, { useEffect } from 'react';
import { useTheme as useNextTheme, useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { Icon } from '../Icon';

const ARIA_LABEL = 'theme switch';

export function ThemeSwitch() {
    const { setTheme } = useNextTheme();
    const { theme } = useTheme();

    useEffect(() => {
        const label = document.querySelector(`[aria-label="${ARIA_LABEL}"]`);
        const div = label?.querySelector('[role="switch"]');
        if (div) div.ariaLabel = 'theme toggle';
    }, []);

    return (
        <Switch
            aria-label={ARIA_LABEL}
            color="primary"
            css={{
                height: '32px',
                padding: '0',
                '& span': { backgroundColor: '$white' },
                '& div': { height: '32px' },
            }}
            squared
            size="lg"
            checked={theme === 'dark'}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            iconOn={<Icon name="Moon" fill={'black'} />}
            iconOff={<Icon name="Sun" fill={'black'} />}
        />
    );
}
