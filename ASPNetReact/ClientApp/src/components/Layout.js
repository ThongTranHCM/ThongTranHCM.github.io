import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { ContactMenu } from './ContactMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <div className="fixed-top">
                    <NavMenu/>
                </div>
                <div style={{ height: "60px" }}/>
                {this.props.children}
                <div className="fixed-bottom">
                    <ContactMenu/>
                </div>
            </div>
        );
    }
}
