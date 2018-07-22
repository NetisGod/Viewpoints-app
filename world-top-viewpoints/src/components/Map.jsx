import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../components/Map.css'

import { Grid, Row, Col } from 'react-bootstrap';

export class MapContainer extends Component {


	constructor(props) {
		super(props);

		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		};


		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClicked = this.onMapClicked.bind(this);

	}

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	};

	render() {
		const google = window.google;

		return (
			<div className="map-container">
				<Map google={this.props.google}
					className={'map'}
					zoom={10}
					onClick={this.onMapClicked}
				>
					<Marker
						title={'Here you are, happy user!'}
						name={'Current location'}
						position={{ lat: 37.778519, lng: -122.405640 }}
						onClick={this.onMarkerClick}
					/>
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}>
						<div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ('AIzaSyDLgdweTnvhPnUE5yzdxcMeK876cFtMaSk')
})(MapContainer)