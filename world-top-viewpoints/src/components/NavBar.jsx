import React, { Component } from 'react'
import {
    Grid, Row, Col, Navbar, Nav, NavItem,
    NavDropdown, MenuItem, FormGroup,
    FormControl, Button, Jumbotron, Carousel
} from 'react-bootstrap'
import '../components/NavBar.css'


class NavBar extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect className="navigation">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">World Top Viewpoints</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>

                    <Nav pullRight>
                        <Navbar.Form>
                            <Button type="submit" className="contribute-photo-btn">Contribute Photo</Button>
                        </Navbar.Form>
                    </Nav>

                    <Nav pullRight>

                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                            <Button type="submit btn-link" className="search-btn"><span className="glyphicon glyphicon glyphicon-search"></span></Button>
                        </Navbar.Form>

                        <NavDropdown eventKey={1} title="Categories" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Popular Photos</MenuItem>
                            <MenuItem eventKey={1.2}>Popular Viewpoints</MenuItem>
                            <MenuItem eventKey={1.3}>Popular Locations</MenuItem>
                            <MenuItem eventKey={1.3}>Popular Cities</MenuItem>
                            <MenuItem eventKey={1.3}>Popular Countries</MenuItem>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default NavBar;