import React, { Component, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./closeClaim.css";
// import { updateClaimMutation } from "../queries/queries.js"
import { graphql } from 'react-apollo';
//  import {graphql} from 'graphql-tag';
// import {useMutation} from 'react-apollo-hooks';
import { useMutation } from 'react-apollo-hooks';
import { getClaimsQuery } from '../queries/queries.js';
import gql from 'graphql-tag';


// constructor(props){
//     super();


// const mutation = gql`
// mutation UpdateClaimMutation($claimID: String!, $status: String!){
//     UpdateClaimMutation(claimID: $claimID, status: $status){
//         claimID
//         status
//     }
// }
// `

const UPDATE_CLAIM_MUTATION = gql`
mutation UpdateClaim($claimID: String!, $status: String!){
    UpdateClaim(claimID: $claimID, status: $status){
        claimID
        status
    }
}
`;

const CREATE_CLAIMLOG_MUTATION = gql`
mutation CreateClaimLog($claimLogID: String!, $timeLog: String!, $logStatus: String!){
    CreateClaimLog(
        claimLogID: $claimLogID,
        timeLog:{
            formatted: $timeLog
        }, 
        logStatus: $logStatus
    ){
        claimLogID
        timeLog {
            formatted
        }
        logStatus
    }
}
`;


const Settle = props => {

    //     function UpdateClaimMutation() {
    //     const [updateClaimMutation, {error}] = useMutation(updateClaimMutation, {
    //         variables: {
    //             claimID: this.props.claimID,
    //             status: "Settled"
    //         }
    //     })
    // };

    // console.log(props);
    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var res = str.toString();
        return res;
    }
    console.log(getFormattedDate().toString());
    const [settleState, setSettleState] = useState(props)
    const [UpdateClaim, { loading }] = useMutation(UPDATE_CLAIM_MUTATION, {
        variables: {
            claimID: settleState.claimID,
            status: "Settled"
        },
        refetchQueries: [{query: getClaimsQuery }]
    })

    const [CreateClaimLog, {loadingLog}] = useMutation(CREATE_CLAIMLOG_MUTATION, {
        variables: {
            claimLogID: settleState.claimID,
            timeLog: getFormattedDate(),
            logStatus: "Settled"
        }
    })

    console.log("Hi", settleState)

    useEffect(() => {

    }, [])

    // const [updateClaimMutation] = useMutation(updateClaimMutation);

    // const [UpdateClaimMutation, { error }] = useMutation(mutation, {
    //     variables: {
    //         claimID: settleState.claimID,
    //         status: "Settled"
    //     }
    // });

    // if (error) {
    //     console.log(error);
    // }


    // console.log(settleState.claimID);
    // console.log(settleState.status);

    // const [state, executeMutation] = useMutation(updateClaimMutation);
    // const submit = React.useCallback(() => {
    //     executeMutation({
    //         variables: {
    //             claimID: settleState.claimID,
    //             status: "Settled"
    //         }
    //     })
    // });


    return (

        <Popup trigger={<button className="closeClaim"> Settle Claim</button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
          </a>
                    <div className="header">
                        Alert </div>
                    <div className="reject">
                        <p className="confirmation">Are you sure this claim is SETTLED?</p>
                    </div>
                    <div className="actions">

                        <button className="button-green"
                            // onClick={
                            //     () => { this.props.updateClaimMutation({
                            //         variables: {
                            //             claimID : this.props.claimID,
                            //             status : this.props.status
                            //         }
                            //     }); }
                            // }

                            // onClick={() => UpdateClaim({
                            //     variables: {
                            //         claimID: settleState.claimID,
                            //         status: "Settled"
                            //     }
                            // })}


                        onClick={e => {
                            UpdateClaim().then(() => {
                                CreateClaimLog();
                            }); 
                            close();
                        }}

                        // onClick={() => { close(); }}
                        >Yes </button>
                        <button className="button-red" onClick={() => { close(); }}>Cancel </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}



// export default graphql(updateClaimMutation)(Settle);
export default Settle;