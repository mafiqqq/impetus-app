import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { getClaimsQuery } from '../queries/queries.js';
import "./claim.css";

//components
// import ClaimDetails from "./ClaimDetails.js";


class ClaimList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            claims: ''
        }
    }

    setClaims = object => {
        this.setState({
            claims: object
        });
    };

    displayClaims() {
        var data = this.props.data;
        console.log(this.props);
        // const claimD = this.setClaims(this.props.data);
        if (data.loading) {
            return (<div>Loading Claims...</div>);
        } else {
            return data.Claim.map(claim => {
                // const claimTo = {
                //     pathname: `/OpenClaim/{claim.claimID}`
                // }

                return (

                    <tr>
                        {/* onClick={ (e) => { this.setState({selected: claim.claimID})}} */}
                        <td >
                            <Link to={
                                {
                                    pathname: "/OpenClaim",
                                    state: {
                                        claimID: claim.claimID,
                                        reportedDate: claim.reportedDate,
                                        icNum: claim.persons.map(x => x.icNum),
                                        status: claim.status,
                                        description: claim.description,
                                        firstName: claim.persons.map(x => x.firstName),
                                        lastName: claim.persons.map(x => x.lastName),
                                        phoneNum: claim.persons.map(x => x.phoneNum),
                                        value: claim.value,
                                        policeNum: claim.accidents.map(x => x.policeNum) 
                                    }
                                }
                            }>{claim.claimID}</Link>
                        </td>
                        <td>{claim.status}</td>
                        <td>{claim.score}</td>
                        <td>RM {claim.value}</td>
                        <td>{claim.persons.map(x => x.firstName)}</td>
                        <td>{claim.persons.map(x => x.lastName)}</td>
                        <td>{claim.accidents.map(x => x.city)}</td>
                        <td>{claim.reportedDate}</td>
                    </tr>
                )
            })


        }
    }
    render() {

        return (
            <div>
                <table className='claims'>
                    <tr>
                        <th>Claim ID</th>
                        <th>Status</th>
                        <th>Score</th>
                        <th>Value</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Reported Date</th>
                    </tr>
                    {this.displayClaims()}
                </table>
                {/* <ClaimDetails claimID={ this.state.selected }/> */}
            </div>
            // <div>
            //     <ul id="claim-list">
            //         { this.displayClaims() }
            //     </ul>
            // </div>
        )
    }

}

export default graphql(getClaimsQuery)(ClaimList);