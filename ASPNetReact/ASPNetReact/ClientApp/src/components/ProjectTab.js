import { motion, useTransform, useViewportScroll } from "framer-motion";
import * as React from "react";

export const ProjectTab = (props) => {
    let { scrollY, scrollYProgress } = useViewportScroll();
    // Get the distance from the start of the page to the element start
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let elem = document.getElementById("CurrentProjectTab");
    let rect = new DOMRect(scrollTop, scrollLeft, 100, 100)
    if (typeof elem === 'object' && elem !== null && 'getBoundingClientRect' in elem) {
        rect = elem.getBoundingClientRect();
        elem.id = "ProgressedTests";
        console.log("NEW RECT");
        console.log(rect);
    }
    let offsetStart = rect.top + scrollTop;
    let offsetEnd = (offsetStart + rect.height);
    let elementScrollStart = offsetStart / document.body.clientHeight;
    let elementScrollEnd = offsetEnd / document.body.clientHeight;
    let scale = useTransform(scrollYProgress, [elementScrollStart, elementScrollEnd], [0.8, 1]);

    function GithubButton(props) {
        const link = props.link;
        if (link) {
            return <div className="mx-auto pt-0">
                <button
                    className="px-3 py-3 btn-dark-primary text-white-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={props.onClick}
                >
                    <img style={{
                        zIndex: 2,
                        width: "40px",
                        height: "40px",
                    }} src="Images/github-mark-white.png" alt="" /> Github
                </button>
            </div>;
        }
        return "";
    }
    function GooglePlayButton(props) {
        const link = props.link;
        if (link) {
            return <div className="mx-auto pt-0">
                <button
                    className="px-3 py-3 btn-dark-primary text-white-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={props.onClick}
                >
                    <img style={{
                        zIndex: 2,
                        width: "40px",
                        height: "40px",
                    }} src="Images/google-play-white.png" alt="" /> Google Play
                </button>
            </div>
        }
        return "";
    }

    let imgFile = "Images/projectDefault.png";
    if (props.imgSource) {
        imgFile = "Images/".concat(props.imgSource);
    }
    return (
        <div id="CurrentProjectTab" className="wrapper" style={{ height: "400px" }}>
            <motion.div
                className="m-3 px-3 py-3 row relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                style={{
                    scale,
                    height: "400px"
                }}
            >
                <div className="col-sm-6">
                    <h3>{props.h3Name}</h3>
                    {props.children}
                    <div className="d-flex px-3 py-3 w-100">
                        <GithubButton onClick={props.LinkGithubClick} link={props.githuburl} />
                        <GooglePlayButton onClick={props.LinkGooglePlayClick} link={props.googleplayurl} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <img className="rounded shadow outline-none focus:outline-none focus:ring" style={{
                        zIndex: 2,
                        width: "100%",
                        height: "350px",
                        filter: "brightness(90%) saturate(100%) "
                    }} src={imgFile} alt="" />
                </div>
            </motion.div>
        </div>
    );
};
