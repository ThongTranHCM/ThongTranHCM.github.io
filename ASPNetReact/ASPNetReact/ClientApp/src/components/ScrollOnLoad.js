import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//npm install --save react-router-hash-link
//react-router-dom
const ScrollOnLoad = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
    const anchor = window.location.hash.slice(1);

    useEffect(() => {
        if (anchor) {
            const anchorEl = document.getElementById(anchor);
            if (anchorEl) {
                anchorEl.scrollIntoView();
            }
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [pathname, anchor]);
}

export default ScrollOnLoad;