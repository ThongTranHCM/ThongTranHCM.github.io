import React, { Component } from 'react';

export class Careers extends Component {
    static displayName = Careers.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCareers = this.incrementCareers.bind(this);
    }

    incrementCareers() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Careers</h1>

                <p>This is a simple example of a React component.</p>
                <p>Implement Careers later.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementCareers}>Increment</button>
            </div>
        );
    }
}
