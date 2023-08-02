import React, { Component } from 'react';

export class Contacts extends Component {
    static displayName = Contacts.name;
    constructor(props) {
        super(props);
        this.state = {
            fburl: 'https://www.facebook.com/ThongHCM97/',
            linkedinurl: 'https://www.linkedin.com/in/th%C3%B4ng-tr%E1%BA%A7n-89518b194/',
            form_endpoint: "https://herotofu.com/start", // TODO - update to the correct endpoint"">
            submitted: false
        };
        this.LinkedInButton_Click = this.LinkedInButton_Click.bind(this);
        this.FacebookButton_Click = this.FacebookButton_Click.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    LinkedInButton_Click() {
        window.open(this.state.linkedinurl, '_blank', 'noopener,noreferrer');
    }
    FacebookButton_Click() {
        window.open(this.state.fburl, '_blank', 'noopener,noreferrer');
    }
    handleSubmit(e) {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }
        this.setState({ curBody: JSON.stringify(data) });
        this.setState({ submitted: true });
        fetch(this.state.form_endpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response was not ok');
                }

                this.setState({ submitted: true });
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
            });
    }


    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-6">
                        <h1>QUICK INFO</h1>
                        <table>
                            <tr style={{ height: '40px' }}>
                                <th>Phone</th>
                                <td>0798797905</td>
                            </tr>
                            <tr style={{ height: '40px' }}>
                                <th>Email</th>
                                <td>
                                    <a href="mailto:thongtran1311@gmail.com">thongtran1311@gmail.com</a>
                                </td>
                            </tr>
                            <tr style={{ height: '40px' }}>
                                <th>Address</th>
                                <td>628/89/31 Hau Giang Street District 6, Ho Chi Minh City</td>
                            </tr>
                            <tr style={{ height: '40px' }}>
                                <th>Social Medias</th>
                                <td>
                                    <button className="btn btn-primary btn-hoverscale" onClick={this.FacebookButton_Click}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" width="30" alt="gh-pages branch setting" />
                                    </button>
                                    <button className="btn btn-primary btn-hoverscale" onClick={this.LinkedInButton_Click}>
                                        <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width="30" alt="gh-pages branch setting" />
                                    </button>
                                </td>
                            </tr>
                        </table>
                        <p>{this.state.curBody}</p>
                    </div>

                    <div class="col-sm-6">
                        <form
                            action={this.state.form_endpoint}
                            onSubmit={this.handleSubmit}
                            method="POST"
                            className='box-coffee'
                            style={{ padding: "20px" }}
                        >
                            <h1>CONTACT ME</h1>
                            <div class="row">

                                <div class="col-sm-6">
                                    <div className="mb-3 pt-0">
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            id="fname" name="fname"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-100"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div className="mb-3 pt-0">
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            id="lname" name="lname"
                                            className="px-3 py-3 placeholder-red-400 text-blue-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-100"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 pt-0">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="mail" name="mail"
                                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-100"
                                    required
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    id="subject" name="subject"
                                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-100"
                                    required
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <textarea
                                    placeholder="Your message"
                                    name="message"
                                    className="px-3 py-3 placeholder-gray-800 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-100"
                                    required
                                />
                            </div>
                            <div className="mb-3 pt-0">
                                <button
                                    className="px-3 py-3 btn-dark-primary text-white-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Send a message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
