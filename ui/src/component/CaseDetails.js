import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
// import { getCaseQuery } from '../queries/queries.js';
import FraudDetected from '../component/FraudDetected';
import ResolveCase from '../component/ResolveCase.js';


class CaseDetails extends Component {
    render() {
        console.log(this.props);
        return (

            <div className="row2">
                <div className="caseDetails">
                    <h3>Details</h3>
                    <div className="divider">

                        <h5>Case Number</h5>
                        <p>{this.props.caseID}</p>
                        <h5>Claimant Name</h5>
                        <p>{this.props.firstName} {this.props.lastName}</p>
                        <h5>Status</h5>
                        <p>{this.props.caseStatus}</p>
                    </div>

                    <div className="divider">
                        <h5>Comments</h5>
                        <p>{this.props.comment}</p>
                    </div>

                </div>
                <div className="caseDetails">
                    <div className="task">
                        <h3>Tasks</h3>
                        <p>{this.props.task}</p>
                    </div>
                    <div className="actions">
                        <FraudDetected 
                        caseID= {parseInt(this.props.caseID)}
                        caseStatus={this.props.caseStatus}
                        claimID={this.props.claimID}/>
                        <ResolveCase 
                        caseID={this.props.caseID}
                        caseStatus={this.props.caseStatus}
                        claimID={this.props.claimID}/>
                        {/* <button className="button">
                            Fraud Detected</button>
                        <button className="button">
                            Resolve Investigation</button> */}
                    </div>
                </div>

            </div>
        )
    }
}



export default CaseDetails