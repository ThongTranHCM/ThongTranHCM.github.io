import React, { Component } from 'react';

export class Education extends Component {
  static displayName = Education.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementEducation = this.incrementEducation.bind(this);
  }

  incrementEducation() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Education</h1>

            <p>This is a simple example of a React component.</p>
            <p>Implement Education later.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementEducation}>Increment</button>
      </div>
    );
  }
}
