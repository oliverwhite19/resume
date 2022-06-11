import { Backdrop, styled } from '@nextui-org/react';
import { KBarAnimator, KBarPortal, KBarPositioner, useKBar, VisualState } from 'kbar';

import { KBarResult } from './Result';
import KBarSearch from './Search';

function Kbar() {
    const { visible } = useKBar((state) => ({
        visible: state.visualState !== VisualState.hidden,
    }));

    return (
        <KBarPortal>
            <Backdrop blur className="backdrop" visible={visible}>
                <KBarPositioner>
                    <StyledKBarAnimator>
                        <KBarSearch />
                        <KBarResult />
                    </StyledKBarAnimator>
                </KBarPositioner>
            </Backdrop>
        </KBarPortal>
    );
}

export default Kbar;

const StyledKBarAnimator = styled(KBarAnimator, {
    maxWidth: '500px',
    width: '100%',
    backgroundColor: '$accents1',
    color: '$text',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '$md',
});
