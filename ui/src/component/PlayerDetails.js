// import React, { Component } from "react";
// // import { gql } from 'apollo-boost';
// import { graphql } from 'react-apollo';
// // import UserList from "./UserList";
// // import { getPlayerQuery} from '../queries/queries.js'; 

// class PlayerDetails extends Component {   
    
//     displayPlayerDetails() {
//         const { Player } = this.props.data;
//         if(Player){
//             return(
//                 <div>
//                     <h2>{Player.name}</h2>
//                     {/* <p> {Player.transfers.from_club.name}</p>
//                     <p> {Player.transfers.to_club.name} </p> */}
//                     {/* <p>All other transfers</p>
//                     <ul className="other-transfers">
//                         {Player.transfers.clubs.map(item => {
//                             return <li key={item.id}>{item.name}</li>
//                         })}
//                     </ul> */}
//                 </div>
//             );
//         }
//         else {
//             return(
//                 <div>
//                     No player selected...
//                 </div>
//             );
//         }
//     }
//     render() {
//         // console.log(this.props);
//         return (
//         <div id="player-details">
//             {this.displayPlayerDetails()}
//         </div>
//         );
//     }
// }


// export default graphql(getPlayerQuery, {
//     options: (props) => {
//         return {
//             variables: {
//                 id: props.playerid
//             }
//         }
//     }
// })(PlayerDetails);