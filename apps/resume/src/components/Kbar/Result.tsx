import { useTheme, styled } from '@nextui-org/react';
import { KBarResults, useMatches } from 'kbar';

import { Icon } from '../Icon';
import { IconNameType } from '../Icon/type';

export function KBarResult() {
    const { results } = useMatches();
    const { theme } = useTheme();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) => {
                if (typeof item === 'string') return <B>{item}</B>;
                return (
                    <ItemWrapper key={item.id} active={active}>
                        {item.icon && (
                            <Icon
                                name={item.icon as IconNameType}
                                fill={active ? theme?.colors.primary.value : theme?.colors.accents4.value}
                                style={{
                                    transition: 'fill 0.3s',
                                    marginRight: '12px',
                                    flexShrink: '0',
                                }}
                            />
                        )}
                        <TextWrapper>
                            <Title>{item.name}</Title>
                            {item.subtitle && <SubTitle>{item.subtitle}</SubTitle>}
                        </TextWrapper>
                    </ItemWrapper>
                );
            }}
        />
    );
}

const B = styled('b', {
    display: 'flex',
    width: '100%',
    margin: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '12px',
    color: '$accents4',
    padding: '4px 16px',
});

const ItemWrapper = styled('div', {
    position: 'relative',
    width: '100%',
    padding: '4px 16px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'inherit',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    variants: {
        active: {
            true: {
                backgroundColor: '$accents2',
                '&::before': {
                    transform: 'scaleX(100%),',
                },
            },
        },
    },
    '&::before': {
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '4px',
        height: '100%',
        backgroundColor: '$primary',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.2s',
    },
});

const TextWrapper = styled('div', {
    width: '100%',
    height: '54px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'hidden',
});

const Title = styled('span', {
    width: '100%',
    textAlign: 'left',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
});

const SubTitle = styled('span', {
    fontSize: '12px',
    color: '$accents4',
});
