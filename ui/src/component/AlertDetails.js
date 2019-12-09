import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getClaimQuery } from '../queries/queries.js';
import "./openedClaim.css";
import NodeGraph from "./NodeGraph.js";

class AlertDetails extends Component {

    render(){
        // console.log(this.props);
        var data = this.props.data;
        console.log(data);
        return (
        
            <div className="row">
                <div className="column">
                    <div className='network'><h2>Network</h2></div>
                    <NodeGraph />
                </div>
    
                <div className="columnWhite">
                    <div className='claimDetail'>
                        <h2>Claim Details</h2>
                    </div>
                    <table >
    
                        <tr>
                            <td><h6>Claim Id</h6>
        <p>{this.props.claimID}</p>
                            </td>
    
                            <td><h6>Claimant Name</h6>
                                <p>{this.props.firstName} {this.props.lastName} </p>
                            </td>
                        </tr>
                        <tr>
                            <td><h6>Reported Date</h6>
                                <p>{this.props.reportedDate}</p>
                            </td>
    
                            <td><h6>Telephone Number</h6>
                                <p>0{this.props.phoneNum}</p>
                            </td>
    
                        </tr>
                        <tr>
                            <td><h6>IC Number</h6>
                                <p> {this.props.icNum}</p>
                            </td>
    
                            <td><h6>Value</h6>
                                <p>{this.props.value}</p>
                            </td>
    
                        </tr>
                        <tr>
                            <td><h6>Status</h6>
                                <p>{this.props.status}</p>
                            </td>
    
                            <td><h6>Police Reference #</h6>
                                <p> {this.props.policeNum}</p>
                            </td>
                        </tr>
                        <tr>
                            <td><h6>Description</h6>
                                <p>{this.props.description}</p>
                            </td>
                        </tr>
    
                    </table>
                </div>
    
                <div className="column">
                    <div className='scoreCardRed'>
                        <h2>Score Card</h2>
                        <h2>500</h2>
                    </div>
    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>
            </div>
        )
    }

}


export default graphql(getClaimQuery, {
    options: (props) => {
        return{
            variables: {
                id: props.claimID
            }
        }
    }
})(AlertDetails);