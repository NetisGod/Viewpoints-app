import React, { Component } from 'react'
import {
    Navbar, Nav, FormGroup,
    FormControl, Button
} from 'react-bootstrap'
import '../Header/NavBar.css'
import Categories from '../Header/Categories'
import ContributePhoto from '../Header/ContributePhoto'

class NavBar extends Component {

    handleChangeCategory = (filteredData, clickedCategory) => {
        this.props.handleCategoryChange(filteredData, clickedCategory);
    }

    render() {
        const data = this.props.data,
            clickedCategory = this.props.clickedCategory;

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
                            <ContributePhoto />
                        </Navbar.Form>
                    </Nav>

                    <Nav pullRight>

                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search" />
                            </FormGroup>{' '}
                            <Button type="submit btn-link" className="search-btn"><span className="glyphicon glyphicon glyphicon-search"></span></Button>
                        </Navbar.Form>

                        <Categories data={data} clickedCategory={clickedCategory} handleChangeCategory={this.handleChangeCategory} />

                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default NavBar;