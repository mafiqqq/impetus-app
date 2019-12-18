import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { getAlertsQuery } from '../queries/queries.js';

class AlertList extends Component{

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
        // console.log(this.props);
        // const claimD = this.setClaims(this.props.data);
        if (data.loading) {
            return (<div>Loading Alerts...</div>);
        } else {
            return data.Claim.map(claim => {
                return (claim.alertScore.map(alert => {
                    return (

                        <tr>
                            <td >
                                <Link to={
                                    {
                                        pathname: "/OpenAlert",
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
                            <td>{alert.score}</td>
                            <td>RM {claim.value}</td>
                            <td>{claim.persons.map(x => x.firstName)}</td>
                            <td>{claim.persons.map(x => x.lastName)}</td>
                            <td>{claim.accidents.map(x => x.city)}</td>
                            <td>{claim.reportedDate}</td>
                            <td>{claim.accidents.map(x => x.accidentDate)}</td>
                        </tr>
                    )
                }))  
            })


        }
    }

    render(){
        return(
            <div>
            <table className='claims'>
                <tr>
                    <th>Claim ID</th>
                    <th>Score</th>
                    <th>Value</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Reported Date</th>
                    <th>Accident Date</th>
                </tr>
                {this.displayClaims()}
            </table>
        </div>
        )
    }

}

export default graphql(getAlertsQuery)(AlertList);