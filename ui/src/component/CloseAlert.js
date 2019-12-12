import React, { Component, useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./closeAlert.css";
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { getClaimsQuery } from '../queries/queries.js';


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

const CloseAlert = props => {
    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var res = str.toString();
        return res;
    }

    const [closeAlertState, setCloseAlertState] = useState(props)
    const [UpdateClaim, { loading }] = useMutation(UPDATE_CLAIM_MUTATION, {
        variables: {
            claimID: closeAlertState.claimID,
            status: "Open"
        },
        refetchQueries: [{ query: getClaimsQuery }]
    })

    const [CreateClaimLog, { loadingLog }] = useMutation(CREATE_CLAIMLOG_MUTATION, {
        variables: {
            claimLogID: closeAlertState.claimID,
            timeLog: getFormattedDate(),
            logStatus: "Settled"
        }
    })
    return (
        <Popup offsetx="0" trigger={<button className="closeAlert" >Close Alert</button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
          </a>
                    <div className="header">
                        Alert </div>
                    <div className="dialogue">
                        <p className="confirmation">Are you sure you want to remove this claim from alerts list?</p>
                    </div>
                    <div className="actions">

                        <button className="button-green" onClick={
                            e => {
                                CreateClaimLog();
                                close();
                            }}>Yes </button>
                        <button className="button-red" onClick={() => { close(); }}>Cancel </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}
export default CloseAlert