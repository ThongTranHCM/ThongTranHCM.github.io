import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ProjectTab } from "./ProjectTab";

export const Test2 = (props) => {
    const { scrollY, scrollYProgress } = useViewportScroll();
    // Get the distance from the start of the page to the element start
    //const rect = Test2.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //const offsetStart = rect.top + scrollTop;
    const offsetStart = 250 + scrollTop;
    //const offsetEnd = (offsetStart + rect.height);
    const offsetEnd = offsetStart + 50;
    const elementScrollStart = offsetStart / document.body.clientHeight;
    const elementScrollEnd = offsetEnd / document.body.clientHeight;
    const scale = useTransform(scrollYProgress, [elementScrollStart, elementScrollEnd], [0.5, 1]);

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

    return (
        <div className="wrapper" style={{height: "500px"}}>
            <motion.div
                className="m-3 px-3 py-3 row relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                style={{
                    scale,
                    height: "500px"
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
                        height: "360px",
                        filter: "brightness(90%) saturate(100%) "
                    }} src={"Images/untitledShootEmUp.png"} alt="" />
                </div>
            </motion.div>
        </div>
    );
};
