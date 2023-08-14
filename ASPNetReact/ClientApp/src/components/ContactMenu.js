import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class ContactMenu extends Component {
    static displayName = ContactMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header style={{backgroundColor:"#ddda"}}>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
                    <NavbarBrand tag={Link} to="/contacts">Contacts</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-5" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink>0798797905</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><a href="mailto:thongtran1311@gmail.com">thongtran1311@gmail.com</a></NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
