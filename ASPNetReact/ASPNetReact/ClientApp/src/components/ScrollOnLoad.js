import { useEffect } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';

//npm install --save react-router-hash-link
//react-router-dom
const ScrollOnLoad = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    useEffect(() => {
        const anchor = window.location.hash.slice(1);
        if (anchor) {
            const anchorEl = document.getElementById(anchor);
            if (anchorEl) {
                anchorEl.scrollIntoView();
            }
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
}

export default ScrollOnLoad;