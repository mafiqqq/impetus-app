import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getDynamicAccLocation } from '../queries/queries.js';
import ReactMapGL, { Marker, Popup } from "react-map-gl";


class Location extends Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>h1</div>
        )
    }
}

export default graphql(getDynamicAccLocation)(Location);
