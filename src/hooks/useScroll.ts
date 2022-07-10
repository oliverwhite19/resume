/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */
import { useState, useEffect } from 'react';
export function useScroll() {
    // storing this to get the scroll direction
    const [lastScrollTop, setLastScrollTop] = useState(0);
    // the offset of the document.body
    const [bodyOffset, setBodyOffset] = useState(process.browser && document.body.getBoundingClientRect());
    // scroll direction would be either up or down
    const [scrollDirection, setScrollDirection] = useState<string | undefined>();

    const listener = () => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
        setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    });

    return {
        scrollDirection,
    };
}
