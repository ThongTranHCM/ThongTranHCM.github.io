import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { ContactMenu } from './ContactMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <div class="fixed-top">
                    <NavMenu/>
                </div>
                <div style={{ height: "60px" }}/>
                {this.props.children}
                <div class="fixed-bottom">
                    <ContactMenu/>
                </div>
            </div>
        );
    }
}
