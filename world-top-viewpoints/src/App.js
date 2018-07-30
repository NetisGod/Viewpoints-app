import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import MapContainer from './components/Body/Map'
import NavBar from './components/Header/NavBar'
import Slider from './components/Body/Slider'
import List from './components/Body/List'
import Footer from './components/Footer/Footer'

import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filteredData: [],
      clickedCategory: 'Popular locations',
      clickedItem: ''
    }
  }

  getData = () => {
    return axios.get("https://demo9002476.mockable.io/world-top-viewpoints")
      .then((response) => {
        this.setState({
          data: response.data.data
        })
      })
  }

  componentDidMount() {
    this.getData(); 
  }

  handleCategoryChange = (filteredData, clickedCategory) => {
    this.setState({
      filteredData: filteredData,
      clickedCategory: clickedCategory
    });
  }

  handleClickedItem = (clickedItem) => { this.setState({ clickedItem: clickedItem }); }

  render() {
    const data = this.state.data,
      filteredData = this.state.filteredData,
      clickedItem = this.state.clickedItem,
      clickedCategory = this.state.clickedCategory;


    return (
      <div className="App">
        <Jumbotron className="main-container" >
          <NavBar
            data={data}
            handleCategoryChange={this.handleCategoryChange}
            clickedCategory={clickedCategory}
          />
          <Slider />
          <div className="find-your-viewpoint"><span className="label">Find your Viewpoint</span></div>  {/* Temporarry here - want to make it statefull component later to make dynamic */}
          <Grid className="alt-grid">
            <Row>
              <Col sm={6} smPush={6}>
                <MapContainer
                  data={Object.keys(filteredData).length ? filteredData : data}
                  clickedItem={clickedItem}
                />
              </Col>
              <Col sm={6} smPull={6}>
                <List
                  data={Object.keys(filteredData).length ? filteredData : data}
                  handleClickedItem={this.handleClickedItem}
                />  {/* Temporary made a glitch for category - needs to be fixed later*/}
              </Col>
            </Row>
          </Grid>

          <Footer />  {/*It's only a scratch by now*/}
        </Jumbotron>
      </div>
    );
  }
}

export default App;
