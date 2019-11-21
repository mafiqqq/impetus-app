import React, { useState, useEffect } from "react";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import MapGL, {Marker, Popup} from "react-map-gl";
// import * as listCity from "../data/listCity.json";
import { graphql } from 'react-apollo';

import {getLocationAccidentQuery} from "../queries/queries.js"

// constructor(props){
//     super(props);
//     this.state={
//         selected: null
//     }
// }

var accidentV = this.props.data;


const Map = () => {

   
    

    const [viewport, setViewport] = useState({
        latitude:3.139003,
        longitude:101.686852,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });

    const [selectedAccident, setSelectedAccident] = useState(null);

    function displayLocation(){
        const accidentExist = accidentV.Accident;
        var data = this.props.data;
        if(accidentExist){
            console.log(this.props);

            return data.Accident.map( accident => {
                return(
                    <Marker 
                    key={accident.accidentID} 
                    latitude={accident.latitude} 
                    longitude={accident.long}
                >
                    <button className="marker-btn" onClick={(e) => {
                        e.preventDefault();
                        setSelectedAccident(accident)
                    }}>
                        <img src="" />
                    </button>
                </Marker>
                )
            })
            
        } else {
            return(
                <div>No Accident Selected...</div>
            )
        }
    }

    useEffect(() => {
        //esc key to exit popup
        const listener = (e) =>{
            if (e.key === "Escape") {
                setSelectedAccident(null);
            }
        };
        window.addEventListener("keydown", listener);
    }, [])

    return(

        // console.log(this.props)
        <div>
            <MapGL {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/impetusfd/ck2vpayt604u41cmusvoacvhz"
                onViewportChange={viewport =>{
                    setViewport(viewport);
                }}
            >
            {displayLocation()}
            {selectedAccident ? (
                <Popup 
                latitude={selectedAccident.latitude} 
                longitude={selectedAccident.longitude}
                onClose={()=>{
                    setSelectedAccident(null);
                }}
                >
                <div>
                <h2>Hi</h2>
                <p>Hiiii</p>
                    </div>
                </Popup>
            ) :null}
                
            </MapGL>
        </div>
    )
}

export default graphql(getLocationAccidentQuery)(Map);