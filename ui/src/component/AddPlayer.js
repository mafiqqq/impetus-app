// import React, { Component } from "react";
// // import { gql } from 'apollo-boost';
// import { graphql, compose } from 'react-apollo';
// // import UserList from "./UserList";
// // import { getClubsQuery, createPlayerMutation, getPlayersQuery } from '../queries/queries.js'


// class AddPlayer extends Component {

//     constructor(props){
//         super(props);
//         this.state={
//             id: "",
//             name: ""
//             // league: "",
//             // clubId: ""
//         }
//     }

//     displayClubs(){
//         var data=this.props.getClubsQuery;
//         if(data.loading){
//             return <option disabled>Loading Clubs...</option>;
//         }else {
//             return data.Club.map(club =>{
//                 return(<option key={club.id} value={ club.id }>{ club.name }</option>)
//             })
//         }
//     }

//     submitForm(e){
//         e.preventDefault();
//         // console.log(this.state);
//         this.props.createPlayerMutation({
//             variables: {
//                 id: this.state.id,
//                 name: this.state.name
//             },
//             refetchQueries:[{query: getPlayersQuery}]
//         });
//     }
   
//     render() {
//         // console.log(this.props)
//         return (
//             <form id="add-player" onSubmit={this.submitForm.bind(this)}>

//                 <div>
//                     <label>Player ID:</label>
//                     <input type="text" onChange={(e) => this.setState({id: e.target.value })} />
//                 </div>

//                 <div className="field">
//                     <label>Player Name:</label>
//                     <input type="text" onChange={(e) => this.setState({name: e.target.value})}/>
//                 </div>

//                 {/* <div className="field">
//                     <label>League:</label>
//                     <input type="text"  onChange={(e) => this.setState({league: e.target.value})}/>
//                 </div> */}

//                 {/* <div className="field">
//                     <label>Club:</label>
//                     <select  onChange={(e) => this.setState({clubId: e.target.value})}>
//                         <option>Select Club</option>
//                         { this.displayClubs() }
//                     </select>
//                 </div> */}

//                 <button>+</button>

//             </form>

//         );
//     }
// }

// export default compose(
//     graphql(getClubsQuery, {name: "getClubsQuery"}),
//     graphql(createPlayerMutation, {name: "createPlayerMutation"})
// )(AddPlayer);
