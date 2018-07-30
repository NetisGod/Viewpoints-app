import React, { Component } from 'react'
import {
  Grid, Row, Col, Navbar, Nav, NavItem,
  NavDropdown, MenuItem, FormGroup,
  FormControl, Button, Jumbotron, Carousel
} from 'react-bootstrap';
import '../Body/Slider.css'
import firstImg from '../../img/architecture-buildings-business-374870.jpg'
import secondImg from '../../img/arizona-clouds-dawn-248174.jpg'
import thirdImg from '../../img/canyon-cliffs-daylight-63553.jpg'

class Slider extends Component {
  render() {
    return (
      <div id="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={firstImg} className="img-responsive" />
            <Carousel.Caption>
              <h3>Niagara Falls</h3>
              <p>One of the most famous wonders of nature is Niagara Falls.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={secondImg} className="img-responsive" />
            <Carousel.Caption>
              <h3>Monuments Valley</h3>
              <p>Monument Valley is a region of the Colorado Plateau characterized by a cluster of vast sandstone buttes.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={thirdImg} className="img-responsive" />
            <Carousel.Caption>
              <h3>Grand Canyon</h3>
              <p>The Grand Canyon is a famous canyon in Arizona.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Slider;