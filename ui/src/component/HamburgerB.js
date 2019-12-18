import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import "./hamburgerB.css";


class Dropdown extends React.Component {

  // this is the js for popup
  submit = () => {
    confirmAlert({
      title: 'Confirmation',
      message: 'Are you sure this claim has been settled?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => ''
        },
        {
          label: 'No',
          onClick: () => ''
        }
      ]
    })
  }


  // hamburgur dropdown display
    constructor(){
     super();
    
     this.state = {
           displayMenu: false,
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
        return (
            <div  className="dropdown">
             <div className="button" onClick={this.showDropdownMenu}></div>
    
              { this.state.displayMenu ? (
              <ul className="dropChoices"
              ref={(element) => {
                this.dropdownMenu = element;
              }}>
             <li><a onClick={this.submit}>Settle Claim</a></li>
             <li><a onClick={this.submit}>Reject Claim</a></li>
          
              </ul>
            ):
            (
              null
            )
            }
    
           </div>
    
        );
      }
    }
    
    export default Dropdown;