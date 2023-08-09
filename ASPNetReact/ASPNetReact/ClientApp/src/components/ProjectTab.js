import React, { Component } from 'react';

export class ProjectTab extends Component {
    static displayName = ProjectTab.name;

    LinkGithubClick() {
        window.open(this.props.githuburl, '_blank', 'noopener,noreferrer');
    }
    LinkGooglePlayClick() {
        window.open(this.props.googleplayurl, '_blank', 'noopener,noreferrer');
    }
    constructor(props) {
        super(props);
        this.state = {
        };
        this.LinkGithubClick = this.LinkGithubClick.bind(this);
        this.LinkGooglePlayClick = this.LinkGooglePlayClick.bind(this);
    }

    render() {
        let imgFile = "Images/projectDefault.png";
        if (this.props.imgSource) {
            imgFile = "Images/".concat(this.props.imgSource);
        }
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
            <div>
                <div className="m-3 px-3 py-3 row relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" style={{height: "400px"} }>
                    <div className="col-sm-6">
                        <h3>{this.props.h3Name}</h3>
                        {this.props.children}
                        <div className="d-flex px-3 py-3 w-100">
                            <GithubButton onClick={this.LinkGithubClick}  link={this.props.githuburl} />
                            <GooglePlayButton onClick={this.LinkGooglePlayClick} link={this.props.googleplayurl} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img className="rounded shadow outline-none focus:outline-none focus:ring" style={{
                            zIndex: 2,
                            width: "100%",
                            height: "360px",
                            filter: "brightness(90%) saturate(100%) "
                        }} src={imgFile} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
