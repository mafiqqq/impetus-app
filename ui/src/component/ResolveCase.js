import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { useMutation } from 'react-apollo-hooks';
import { getCasesQuery, getClaimsQuery } from '../queries/queries.js';
import gql from 'graphql-tag';
import CaseList from "../component/CaseList.js";


const UPDATE_CASE_MUTATION = gql`
mutation UpdateCase($caseID: Int, $caseStatus: String){
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


const ResolveCase = props => {

    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var res = str.toString();
        return res;
    }

    // console.log(props);
    const [resolveState, setResolveState] = useState(props)
    const [UpdateCase, { loadingCase }] = useMutation(UPDATE_CASE_MUTATION, {
        variables: {
            caseID: resolveState.caseID,
            caseStatus: "Close"
        },
        refetchQueries: [{ query: getCasesQuery }]
    })
    const [UpdateClaim, { loadingClaim }] = useMutation(UPDATE_CLAIM_MUTATION, {
        variables: {
            claimID: resolveState.claimID,
            status: "Open"
        },
        refetchQueries: [{ query: getClaimsQuery }]
    })

    const [CreateClaimLog, {loadingLog}] = useMutation(CREATE_CLAIMLOG_MUTATION, {
        variables: {
            claimLogID: resolveState.claimID,
            timeLog: getFormattedDate(),
            logStatus: "Case Resolved"
        }
    })

  
    useEffect(() => {

    }, [])
    return (
        <Popup offsetx="0" trigger={<button className="button" >Resolve Case</button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
          </a>
                    <div className="header">
                        Alert </div>
                    <div className="dialogue">
                        <p className="confirmation">Are you sure this claim is RESOLVED?</p>
                    </div>
                    <div className="actions">

                        <button className="button" onClick={e => { 
                            UpdateCase().then(() => {
                                UpdateClaim().then(() => {
                                    CreateClaimLog();
                                })
                            })
                            close(); 
                        }}>Yes </button>
                        <button className="button" onClick={() => { close(); }}>Cancel </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}
export default ResolveCase