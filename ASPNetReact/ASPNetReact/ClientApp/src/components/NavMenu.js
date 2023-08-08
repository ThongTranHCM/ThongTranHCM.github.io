import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HashLink as ALink } from 'react-router-hash-link';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.DownloadCVClick = this.DownloadCVClick.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    DownloadCVClick() {
        window.open('Files/TranThoaiThong - Backend Developer.pdf', '_blank', 'noopener,noreferrer');
        //Consider  <a href='Files/TranThoaiThong - Backend Developer.pdf' download>Download CV</a>
    }

    render() {
        return (
            <header style={{backgroundColor:"#ddda"}}>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <NavbarBrand tag={Link} to="/">Trần Thoại Thông</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/projects">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/projects#Personal">Pers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/contacts">Contacts</NavLink>
                            </NavItem>
                            <button className="btn-dark-primary" onClick={this.DownloadCVClick} >Download CV</button>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
