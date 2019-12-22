import React, { Component, useState, useEffect } from "react";
import { graphql } from 'react-apollo';
import { getLocationAccidentQuery, getDynamicAccLocation } from '../queries/queries.js';
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
        console.log(data);
        if (data.loading) {
            return (<div>Loading Accidents location...</div>)
        } else {
            return data.Claim.map(accident => {
                // console.log(accident.accidents.map(x => x.involves.map(y => y.drivers.map(z => z.claims.map(d => d.accidents)))))

                return accident.accidents.map(x => x.involves.map(y => y.drivers.map(z => z.claims.map(d => d.accidents.map(f => {
                    return (
                        <Marker
                            key={f.accidentID}
                            latitude={parseFloat(f.latitude)}
                            longitude={parseFloat(f.longitude)}
                        >
                            {/* {console.log(f.accidentID)} */}
                            <button className="marker-btn" onClick={(e) => {
                                e.preventDefault();
                                // console.log(f);
                                // this.setState({selectedAccident: d})
                                this.setSelectedAccident(d);
                            }}>
                                <img style={{ width: "30px", height: "30px" }} src={Logo} />
                            </button>
                        </Marker>
                    );
                })))))

            });
        }

    };


    render() {
        return (
            <div className="LocationView">
                <ReactMapGL {...this.state.viewport}
                    onViewportChange={(viewport => this.setState({ viewport }))}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/impetusfd/ck4d22kjj3ne51cqgukcgcy6c"
                >
                    {this.loadAccidentMarkers()}
                    {/* {console.log(JSON.stringify(this.state.selectedAccident))} */}
                    {this.state.selectedAccident !== null ? (

                        <Popup

                            // latitude={this.state.selectedAccident.map(x => x.involves.map(y => y.drivers.map(z => z.claims.map(d=>d.accidents.map(f => f.latitude)))))}
                            // longitude={this.state.selectedAccident.map(x => x.involves.map(y => y.drivers.map(z => z.claims.map(d=>d.accidents.map(f => f.longitude)))))}
                            {...console.log(this.state.selectedAccident)}
                            latitude={parseFloat(this.state.selectedAccident.accidents.map(f => f.latitude))}
                            longitude={parseFloat(this.state.selectedAccident.accidents.map(f => f.longitude))}
                            onClose={this.closePopup}
                        >
                            <div className="popup-marker">
                                <p>
                                    <b>Location: </b> {this.state.selectedAccident.accidents.map(f => f.street)} {", "}
                                    {this.state.selectedAccident.accidents.map(f => f.city)}
                                </p>
                                <p>
                                    <b>Claim ID: {this.state.selectedAccident.accidents.map(f => f.claims.map(g => g.claimID + " "))} </b>
                                </p>
                            </div>
                        </Popup>
                    ) : null}
                </ReactMapGL>
            </div>

        )
    }

}

export default graphql(getDynamicAccLocation, {
    options: (props) => {
        return {
            variables: {
                id: props.claimID
            }
        };
    }
})(LocationView);