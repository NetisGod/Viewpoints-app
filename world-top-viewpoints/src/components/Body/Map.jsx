import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../Body/Map.css'
import marker_active from '../../img/marker.png'
import marker from '../../img/marker_active.png'

import { Grid, Row, Col } from 'react-bootstrap';

export class MapContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		};
	}

	onMarkerClick = (props, marker, e) => {
		let newProp = props;

		console.log(marker);

		this.setState({
			selectedPlace: newProp,
			activeMarker: marker,
			showingInfoWindow: true
		});

		console.log(this.state.activeMarker.icon);
	}

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
		const data = this.props.data;

		return (
			<div className="map-container">
				<Map google={this.props.google}
					className={'map'}
					zoom={3}
					onClick={this.onMapClicked}
				>
					{data.map(item =>
						<Marker
							key={item.id}
							title={item.name}
							name={item.name}
							position={{ lat: item.lat, lng: item.lng }}
							onClick={this.onMarkerClick}
							animation={item.name === this.props.clickedItem && google.maps.Animation.BOUNCE}
							icon={(item.name === this.props.clickedItem) ? {
								url: marker_active,
								anchor: new google.maps.Point(32, 32),
								scaledSize: new google.maps.Size(58, 58)
							} : {
									url: marker,
									anchor: new google.maps.Point(32, 32),
									scaledSize: new google.maps.Size(52, 52),
								}}
						/>
					)}
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
					>
						<div className="info">
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