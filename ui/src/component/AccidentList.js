import React, { Component } from "react";
// import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
// import UserList from "./UserList";
import {getAccidentsQuery } from '../queries/queries.js'; 
// import PlayerDetails from './PlayerDetails';

class AccidentList extends Component {

    constructor(props){
        super(props);
        this.state={
            selected: null
        }
    }
    // displayPlayers(){
    //     var data = this.props.data;

    //     if(data.loading){
    //         return(<div>Loading players...</div>)
    //     } else {
    //         return data.Player.map(player => {
    //             return(
    //                 <li key={player.id} onClick={(e)=>{this.setState({selected: player.id }) }}>{ player.name}</li>
    //             )
    //         })
    //     }
    // }

    displayAccidents(){
        var data = this.props.data.Accident;
        // console.log(this.props);
        if(data.loading){
            return(<div>Loading accidents...</div>)
        } else {
            return data.Accident.map(accident => {
                return(
                <li key={accident.accidentID} onClick={(e) => {this.setState({selected: accident.accidentID})}}>{ accident.state }</li>
                )
            })
        }
    }
   
    render() {
        console.log(this.props)
        return (
        <div >
            {/* <ul id="player-list">
                { this.displayPlayers() }
            </ul> */}
            <ul id="accident-list">
                { this.displayAccidents() }
            </ul>
            {/* <PlayerDetails playerid={this.state.selected} /> */}
        </div>

        );
    }
}

export default graphql(getAccidentsQuery)(AccidentList);

// export deafault compose(
// graphql(getAccidentQuery, {name: "getAccidentQuery"})
// )();