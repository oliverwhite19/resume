import { useEffect, useState } from 'react';
import { styled } from '@nextui-org/react';

export function PageProgressBar() {
    const [pageYOffset, setPageYOffset] = useState<number>(0);
    const [offsetHeight, setOffsetHeight] = useState<number>(100);

    useEffect(() => {
        function setScroll() {
            setPageYOffset(window.pageYOffset);
        }

        function setPageOffsetHeight() {
            setOffsetHeight(window.document.body.offsetHeight - window.innerHeight);
        }

        setScroll();
        setPageOffsetHeight();
        window.addEventListener('scroll', setScroll);
        window.addEventListener('resize', setPageOffsetHeight);

        return () => {
            window.removeEventListener('scroll', setScroll);
            window.removeEventListener('resize', setPageOffsetHeight);
        };
    }, []);

    return <Div style={{ width: `${(pageYOffset / offsetHeight) * 100}%` }}></Div>;
}

const Div = styled('div', {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 0,
    height: '4px',
    backgroundColor: '$primary',
    transition: 'width 0.05s',
});
