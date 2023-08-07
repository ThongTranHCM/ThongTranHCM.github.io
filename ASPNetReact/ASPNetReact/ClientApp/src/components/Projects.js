import React, { Component } from 'react';

export class Projects extends Component {
    static displayName = Projects.name;

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementProjects = this.incrementProjects.bind(this);
    }

    incrementProjects() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Projects</h1>

                <p>This is a simple example of a React component.</p>
                <p>Implement Projects later.</p>

                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

                <button className="btn btn-primary" onClick={this.incrementProjects}>Increment</button>
            </div>
        );
    }
}
