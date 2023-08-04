import React, { Component } from 'react';

export class Education extends Component {
    static displayName = Education.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
    }

    render() {
        return (
            <div>
                <h1>Education</h1>
                <div class="container-fluid">
                    <h1>Three equal width columns</h1>
                    <p>Note: Try to add a new div with class="col" inside the row class - this will create four equal-width columns.</p>
                    <div class="row">
                        <div class="col" style={{ backgroundColor: 'white' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'orange' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'white' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'lime' }}>.col</div>
                    </div>
                    <div class="row">
                        <div class="col" style={{ backgroundColor: 'orange' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'white' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'lime' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'white' }}>.col</div>
                    </div>
                    <div class="row">
                        <div class="col" style={{ backgroundColor: 'white' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'orange' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'white' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'lime' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                                width="130" alt="gh-pages branch setting"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style={{ backgroundColor: 'orange' }}></div>
                        <div class="col" style={{ backgroundColor: 'white' }}>
                            University of Science<br />
                            University of Science is a high-ranked university in teaching Computer Science in Vietnam
                        </div>
                        <div class="col" style={{ backgroundColor: 'lime' }}>.col</div>
                        <div class="col" style={{ backgroundColor: 'white' }}>
                            Le Hong Phong High School for the Gifted<br />
                            Consolation prize for National excellent student in Computer Science (C++) in 2015.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
