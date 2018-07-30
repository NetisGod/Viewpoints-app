import React, { Component } from 'react'
import {
    Grid, Row, Col, Navbar, Nav, NavItem,
    NavDropdown, MenuItem, FormGroup,
    FormControl, Button, Jumbotron, Carousel
} from 'react-bootstrap'
import smoothscroll from 'smoothscroll-polyfill';
import '../Header/Categories.css'

export default class Categories extends Component {

    handleClick = (event) => {
        let clickedCategory = event.target,
            filteredData = this.props.data;

        filteredData = filteredData.filter(item => {
            return item.category === clickedCategory.id;
        });

        clickedCategory.parentNode.classList.add('active');
        
        this.props.handleChangeCategory(filteredData, clickedCategory.id);
        this.goToAnchorClick();
    }

    goToAnchorClick = () => {
        smoothscroll.polyfill();
        window.__forceSmoothScrollPolyfill__ = true;
        document.querySelector('.find-your-viewpoint').scrollIntoView({ behavior: 'smooth', block: 'start' });

    }

    render() {
        const data = this.props.data;

        let categoriesList = [];
        // categoriesList.push('All_categories');   // just to be, right now 
        
        data.map(item => {
            categoriesList.push(item.category);
        });
        return (
            <NavDropdown eventKey={1} title="Categories" id="basic-nav-dropdown" className="categories-dropdown">
                {categoriesList.filter((item, index, self) => {
                    return self.indexOf(item) === index;
                }).map((item, index) =>
                    <MenuItem
                        key={index}
                        id={item}
                        onClick={this.handleClick}
                        className={item === this.props.clickedCategory ? "active" : '' }
                    >
                        {item}
                    </MenuItem>
                )}
            </NavDropdown>
        )
    }
}



