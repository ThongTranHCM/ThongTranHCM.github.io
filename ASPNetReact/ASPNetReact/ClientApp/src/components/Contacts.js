import React, { Component } from 'react';

export class Contacts extends Component {
    static displayName = Contacts.name;

    constructor(props) {
        super(props);
        this.state = {
            fburl: 'https://www.linkedin.com/in/th%C3%B4ng-tr%E1%BA%A7n-89518b194/',
            linkedinurl: 'https://www.linkedin.com/in/th%C3%B4ng-tr%E1%BA%A7n-89518b194/',
            abab:0
        };
        this.LinkedInButton_Click = this.LinkedInButton_Click.bind(this);
        this.FacebookButton_Click = this.FacebookButton_Click.bind(this);
    }
    LinkedInButton_Click() {
        window.open(this.state.linkedinurl, '_blank', 'noopener,noreferrer');
    }
    FacebookButton_Click() {
        window.open(this.state.fburl, '_blank', 'noopener,noreferrer');
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <table>
                    <tr style={{ height: '40px' }}>
                        <th>Phone</th>
                        <td>0798797905</td>
                    </tr>
                    <tr style={{ height: '40px' }}>
                        <th>Email</th>
                        <td>thongtran1311@gmail.com</td>
                    </tr>
                    <tr style={{ height: '40px' }}>
                        <th>Address</th>
                        <td>628/89/31 Hau Giang Street District 6, Ho Chi Minh City</td>
                    </tr>
                    <tr style={{ height: '40px' }}>
                        <th>Social Medias</th>
                        <td>
                            <button className="btn btn-primary" onClick={this.FacebookButton_Click}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" width="30" alt="gh-pages branch setting" />Facebook
                            </button>
                            <button className="btn btn-primary" onClick={this.LinkedInButton_Click}>
                                <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width="30" alt="gh-pages branch setting"/>Linkedin
                            </button>
                        </td>
                    </tr>
                </table>

                <br />
                <p aria-live="polite">Current count: <strong>{this.state.fburl}</strong></p>

            </div>
        );
    }
}
