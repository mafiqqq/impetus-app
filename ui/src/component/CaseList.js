import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { getCasesQuery } from '../queries/queries.js';


class CaseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            cases: ''
        }
    }

    setCases = object => {
        this.setState({
            cases: object
        });
    };

    displayCases() {
        var data = this.props.data;
        console.log(this.props);
        // console.log(data.Case.map(cases =>{
        //     cases.claims.map( x => x.claimID)
        // }))
        // const claimD = this.setClaims(this.props.data);
        if (data.loading) {
            return (<div>Loading Cases...</div>);
        } else {
            return data.Case.map(cases => {
                return (cases.caseStatusFilter.map(caseStatus => {
                    console.log(cases.claims.map(x => x.persons.map(y => y.lastName)));
                    return (
                        <tr>
                            {/* onClick={ (e) => { this.setState({selected: claim.claimID})}} */}
                            <td >
                                <Link to={
                                    {
                                        pathname: "/OpenCase",
                                        state: {
                                            caseID: cases.caseID,
                                            comment: cases.comment,
                                            task: cases.task,
                                            dueDate: cases.dueDate,
                                            caseStatus: caseStatus.caseStatus,
                                            claimID: cases.claims.map(x => x.claimID),
                                            status: cases.claims.map(x => x.status),
                                            reportedDate: cases.claims.map(x => x.reportedDate),
                                            value: cases.claims.map(x => x.value),
                                            description: cases.claims.map(x => x.description),
                                            firstName: cases.claims.map(x => x.persons.map(y => y.firstName)),
                                            lastName: cases.claims.map(x => x.persons.map(y => y.lastName)),
                                            phoneNum: cases.claims.map(x => x.persons.map(y => y.phoneNum)),
                                            icNum: cases.claims.map(x => x.persons.map(y => y.icNum)),
                                            policeNum: cases.claims.map(x => x.accidents.map(y => y.policeNum))
                                        }
                                    }
                                }>{cases.caseID}</Link>
                            </td>
                            <td>{cases.task}</td>
                            <td>{cases.claims.map(x => x.reportedDate)}</td>
                            <td>RM {cases.claims.map(x => x.value)}</td>
                            <td>{cases.dueDate}</td>
                            <td>{cases.claims.map(x => x.persons.map(y => y.firstName))}</td>
                        </tr>
                    )
                }))

            }
            )
            // const claimTo = {
            //     pathname: `/OpenClaim/{claim.claimID}`
            // }


        }


    }

    render() {
        return (
            <div>
                <table className='claims'>
                    <tr>
                        <th>Case ID</th>
                        <th>Task</th>
                        <th>Claim Date</th>
                        <th>Value</th>
                        <th>Due Date</th>
                        <th>Claim By</th>
                    </tr>
                    {this.displayCases()}

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

export default graphql(getCasesQuery)(CaseList);