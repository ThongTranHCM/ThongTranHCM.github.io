import React, { Component } from 'react';

export class HomeHeader extends Component {
    static displayName = HomeHeader.name;

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let imgTint, imgSepia, imgBrightness, imgSaturate, imgGrayscale, imgFilter;
        let imgHeight = "400px";
        if (!this.props.imgTint) {
            imgGrayscale = "grayscale(100%) ";
            imgSepia = ""
            imgBrightness = "brightness(50%) ";
            imgSaturate = "saturate(300%) ";
            imgTint = "";
        } else {
            imgGrayscale = "";
            imgSepia = "sepia(100%) ";
            imgBrightness = "brightness(50%) ";
            imgSaturate = "saturate(200%) ";
            imgTint = "hue-rotate(".concat(this.props.imgTint).concat("deg) ");
        }

        if (this.props.imgHeight) {
            imgHeight = this.props.imgHeight;
        }
        imgFilter = imgGrayscale.concat(imgSepia).concat(imgBrightness).concat(imgSaturate).concat(imgTint);
        return (
            <div>
                <div className="text-white" style={{ height: imgHeight }}>
                    <img className={this.props.imgClass} style={{
                        position: "absolute",
                        zIndex: -1,
                        width: "100%",
                        height: imgHeight,
                        filter: imgFilter
                    }} src="Images/avatar2small.jpg" alt="" />
                    <div className="align-middle text-center" style={{ paddingBlock: "10em" }}>
                        <h1>{this.props.h1Name}</h1>
                        <h2>{this.props.h2Name}</h2>
                    </div>
                </div>
                <div className="divFull px-3 py-3">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
