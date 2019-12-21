import React, {useState, useEffect} from "react";
import Popup from "reactjs-popup";
import "./closeClaim.css";
import { useMutation } from 'react-apollo-hooks';
import { getClaimsQuery } from '../queries/queries.js';
import gql from 'graphql-tag';





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

const Reject = props => {

    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var res = str.toString();
        return res;
    }

    const [rejectState, setRejectState] = useState(props)
    const [UpdateClaim, { loading }] = useMutation(UPDATE_CLAIM_MUTATION, {
        variables: {
            claimID: rejectState.claimID,
            status: "Rejected"
        },
        refetchQueries: [{query: getClaimsQuery }]
    })

    const [CreateClaimLog, {loadingLog}] = useMutation(CREATE_CLAIMLOG_MUTATION, {
        variables: {
            claimLogID: rejectState.claimID,
            timeLog: getFormattedDate(),
            logStatus: "Rejected"
        }
    })

    console.log("Hi", rejectState)

    useEffect(() => {

    }, [])

  return (
      <Popup offsetx="0" trigger={<button className="closeClaim" > Reject Claim</button>} modal>
          {close => (
              <div className="modal">
                  <a className="close" onClick={close}>
                      &times;
          </a>
                  <div className="header">
                  Alert </div>
                  <div className="reject">
                      <p className="confirmation">Are you sure this claim is REJECTED??</p>
          </div>
                  <div className="actions">

                      <button   className="button" onClick={e => {
                            UpdateClaim().then(() =>{
                                CreateClaimLog();
                            }); 
                            close();
                        }}>Yes </button>
                      <button className="button" onClick={() => {close();}}>Cancel </button>
                  </div>
              </div>
          )}
      </Popup>
  );
}
export default Reject