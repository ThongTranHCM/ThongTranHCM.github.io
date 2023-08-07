import React, { Component } from 'react';

export class ProjectTab extends Component {
    static displayName = ProjectTab.name;

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let imgHeight = "200px";
        let imgFile = "Images/projectDefault.png";
        if (this.props.imgSource) {
            imgFile = "Images/".concat(this.props.imgSource);
        }
        if (this.props.imgHeight) {
            imgHeight = this.props.imgHeight;
        }
        return (
            <div>
                <div className="text-white" style={{ height: imgHeight }}>
                    <img className={this.props.imgClass} style={{
                        position: "absolute",
                        zIndex: -1,
                        width: "100%",
                        height: imgHeight,
                        filter: "brightness(30%) saturate(100%) "
                    }} src={imgFile} alt="" />
                    <div className="align-middle text-center" style={{ paddingBlock: "4em" }}>
                        <h1>{this.props.h1Name}</h1>
                    </div>
                </div>
                <div className="divFull px-3 py-3">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
