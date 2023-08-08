import { useEffect } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';

//npm install --save react-router-hash-link
//react-router-dom
const ScrollOnLoad = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
    let hash = window.location.hash;
    console.log("loc ".concat(pathname));

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        if (window.location.hash.length === 0) {
            window.scrollTo(0, 0);
        } else {
            const element = document.getElementById(window.location.hash);
            //element.scrollIntoView();
        }
    }, [pathname]);
}

export default ScrollOnLoad;