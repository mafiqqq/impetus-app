import React, { Component, useState, useEffect } from "react";
import { graphql } from 'react-apollo';
import { getLocationAccidentQuery } from '../queries/queries.js';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Logo from '../img/carAccident.svg';



class LocationView extends Component {


    constructor(props) {
        super(props);

    }

    state = {
        viewport: {
            width: "100vw",
            height: "100vh",
            latitude: 3.1577405,
            longitude: 101.712167,
            zoom: 12
        },
        Accident: [],
        selectedAccident: null,
        userLocation: {}
    };

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let setUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            let newViewport = {
                height: "100vh",
                width: "100vw",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 12
            };
            this.setState({
                viewport: newViewport,
                userLocation: setUserLocation
            });
        })
    };

    setSelectedAccident = object => {
        this.setState({
            selectedAccident: object
        });
    };

    closePopup = () => {
        this.setState({
            selectedAccident: null
        });
    };


    loadAccidentMarkers = () => {

        var data = this.props.data;
        // console.log(this.props);
        if (data.loading) {
            return (<div>Loading Accidents location...</div>)
        } else {
            return data.Accident.map(accident => {
                return (
                    <Marker
                        key={accident.accidentID}
                        latitude={parseFloat(accident.latitude)}
                        longitude={parseFloat(accident.longitude)}
                    >
                        <button className="marker-btn" onClick={(e) => {
                            e.preventDefault();
                            this.setSelectedAccident(accident);
                        }}>
                            <img style={{ width: "30px", height: "30px" }} src={Logo} />
                        </button>
                    </Marker>
                );
            });
        }

    };


    render() {
        return (
            <div className="LocationView">
                <ReactMapGL {...this.state.viewport}
                    onViewportChange={(viewport => this.setState({ viewport }))}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/impetusfd/ck2vpayt604u41cmusvoacvhz"
                >
                    {this.loadAccidentMarkers()}
                    {this.state.selectedAccident !== null ? (
                        <Popup
                            latitude={parseFloat(this.state.selectedAccident.latitude)}
                            longitude={parseFloat(this.state.selectedAccident.longitude)}
                            onClose={this.closePopup}
                        >
                            <div className="popup-marker">
                                <p>
                                    <b>Location: </b> {this.state.selectedAccident.street} {", "}
                                    {this.state.selectedAccident.city}
                                </p>
                                <p>
                                    <b>Claim ID: {this.state.selectedAccident.claims.map(x => x.claimID)}</b>
                                </p>
                            </div>
                        </Popup>
                    ) : null}
                </ReactMapGL>
            </div>

        )
    }

}

export default graphql(getLocationAccidentQuery)(LocationView);