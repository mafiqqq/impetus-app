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

const Reject = props => {

    const [rejectState, setRejectState] = useState(props)
    const [UpdateClaim, { loading }] = useMutation(UPDATE_CLAIM_MUTATION, {
        variables: {
            claimID: rejectState.claimID,
            status: "Rejected"
        },
        refetchQueries: [{query: getClaimsQuery }]
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
                      <p className="confirmation">Are you sure this claim is rejected?</p>
          </div>
                  <div className="actions">

                      <button   className="button-green" onClick={e => {
                            UpdateClaim(); 
                            close();
                        }}>Yes </button>
                      <button className="button-red" onClick={() => {close();}}>Cancel </button>
                  </div>
              </div>
          )}
      </Popup>
  );
}
export default Reject