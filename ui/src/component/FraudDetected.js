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




const FraudDetected = props => {

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
                            UpdateCase();
                            UpdateClaim();
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