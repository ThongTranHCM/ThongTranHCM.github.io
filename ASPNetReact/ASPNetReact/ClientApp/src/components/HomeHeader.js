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
        let bgImg = 'url("Images/avatar2.jpg")';
        if (this.props.imgSource) {
            bgImg = 'url("Images/'.concat(this.props.imgSource).concat('")');
        }
        imgFilter = imgGrayscale.concat(imgSepia).concat(imgBrightness).concat(imgSaturate).concat(imgTint);
        return (
            <div>
                <div className="text-white" >
                    <div class="parallax tint-coffee" style={{
                    }}
                    >
                        <div class="caption">
                            <span class="border">{this.props.h1Name}</span> </div>
                    </div>
                </div>
                <div className="divFull px-3 py-3">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
