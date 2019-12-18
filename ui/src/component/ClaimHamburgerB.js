import React from 'react';
import "./hamburgerB.css";
import Reject from "./RejectClaimpu";
import Settle from "./SettleClaimpu";
import {updateClaimMutation} from "../queries/queries";
import { graphql } from 'react-apollo';
import {useLocation} from 'react-router';




class Dropdown extends React.Component {
  

  // hamburgur dropdown display
    constructor(props){
     super();
    
     this.state = {
           displayMenu: false,
          //  claimID: this.props.claimID,
          //  status: this.props.status
         };
    
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
    };

    
    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu(event) {
        if (!this.dropdownMenu.contains(event.target)){
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    }
    
      render() {
        // const location = useLocation();
        // console.log(location);
        // console.log(this.props.claimID);
        // console.log(this.props.status);
        // console.log(this.status);
        // updateClaimID = this.props.claimID
        // updateClaimStatus = this.props.status
        return (
            <div  className="dropdown">
             <button className="ham" onClick={this.showDropdownMenu}></button>
    
              { this.state.displayMenu ? (
              <div className="dropChoices"
              ref={(element) => {
                this.dropdownMenu = element;
              }}>
              
             <Settle
             claimID={this.props.claimID}
             status={this.props.status}/>
             <Reject
             claimID={this.props.claimID}
             status={this.props.status}/>
          
              </div>
            ):
            (
              null
            )
            }
    
           </div>
    
        );
      }
    }
    
    export default graphql(updateClaimMutation)(Dropdown);