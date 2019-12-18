import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { useMutation } from 'react-apollo-hooks';
import { getCasesQuery, getClaimsQuery } from '../queries/queries.js';
import gql from 'graphql-tag';



const UPDATE_CASE_MUTATION = gql`
mutation UpdateCase($caseID: Int!, $caseStatus: String!){
    UpdateCase(caseID: $caseID, caseStatus: $caseStatus){
        caseID
        caseStatus
    }
}
`;

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


const FraudDetected = props => {

    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var res = str.toString();
        return res;
    }

    const [fraudState, setFraudState] = useState(props)
    const [UpdateCase, { loadingCase }] = useMutation(UPDATE_CASE_MUTATION, {
        variables: {
            caseID: fraudState.caseID,
            caseStatus: "Close"
        },
        refetchQueries: [{ query: getCasesQuery }]
    })
    const [UpdateClaim, { loadingClaim }] = useMutation(UPDATE_CLAIM_MUTATION, {
        variables: {
            claimID: fraudState.claimID,
            status: "Fraud"
        },
        refetchQueries: [{ query: getClaimsQuery }]
    })

    const [CreateClaimLog, {loadingLog}] = useMutation(CREATE_CLAIMLOG_MUTATION, {
        variables: {
            claimLogID: fraudState.claimID,
            timeLog: getFormattedDate(),
            logStatus: "Fraud"
        }
    })

    useEffect(() => {

    }, [])
    return (
        <Popup offsetx="0" trigger={<button className="button-red" >Fraud Detected</button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
          </a>
                    <div className="header">
                        Alert </div>
                    <div className="dialogue">
                        <p className="confirmation">Are you sure this claim is FRAUD?</p>
                    </div>
                    <div className="actions">

                        <button className="button-green" onClick={e => {
                            UpdateCase().then(()=>{
                                UpdateClaim().then(() => {
                                    CreateClaimLog().then(() =>{
                                        document.location= "/CaseList"
                                    })
                                })
                            })
                            close();
                        }}>Yes </button>
                        <button className="button-red" onClick={() => { close(); }}>Cancel </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}
export default FraudDetected