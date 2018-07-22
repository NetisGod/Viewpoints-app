import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import MapContainer from './components/Map'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import List from './components/List'
import Footer from './components/Footer'

import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.getData = this.getData.bind(this);
  }

  getData() {
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

  render() {
    const data = this.state.data;

    return (
      <div className="App">
        <Jumbotron className="main-container">
          <NavBar />
          <Slider />
          <div className="find-your-viewpoint"><span className="label">Find your Viewpoint</span></div>  {/* Temporarry here - want to make it statefull component later to make dynamic */}
          <MapContainer />
          <List data={data} />  {/* Temporary made a glitch for category - needs to be fixed later*/}
          <Footer />  {/*It's only a scratch by now*/}
        </Jumbotron>
      </div>
    );
  }
}

export default App;
