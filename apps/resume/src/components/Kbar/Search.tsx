import * as React from 'react';
import { styled } from '@nextui-org/react';
import { useKBar } from 'kbar';

export default function KBarSearch(props: React.InputHTMLAttributes<HTMLInputElement>) {
    const { query, search, actions, currentRootActionId } = useKBar((state) => ({
        search: state.searchQuery,
        currentRootActionId: state.currentRootActionId,
        actions: state.actions,
    }));
    const ownRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        query.setSearch('');
        ownRef.current?.focus();
    }, [currentRootActionId, query]);

    return (
        <Input
            ref={ownRef}
            {...props}
            value={search}
            placeholder="Cmd (or Ctrl) + K to toggle"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                props.onChange?.(event);
                query.setSearch(event.target.value);
            }}
            onKeyDown={(event: { key: string }) => {
                if (currentRootActionId && !search && event.key === 'Backspace') {
                    const parent = actions[currentRootActionId].parent;
                    query.setCurrentRootAction(parent);
                }
            }}
        />
    );
}

const Input = styled('input', {
    padding: '14px 24px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    color: '$foreground',
    '&:focus::placeholder': {
        opacity: 1,
        transition: 'opacity 0.25s ease 0s',
    },
    '&::placeholder': {
        color: '$accents4',
        transition: 'opacity 0.25s ease 0s',
        '-moz-transition': 'opacity 0.25s ease 0s',
        '-ms-transition': 'opacity 0.25s ease 0s',
        '-webkit-transition': 'opacity 0.25s ease 0s',
    },
});
