import React, { Component, useState } from "react";
import { graphql } from "react-apollo";
import { getClaimQuery, getScpreboardQuery } from "../queries/queries.js";
import NodeGraph from "./NodeGraph.js";
import gql from 'graphql-tag';
import { useMutation, useQuery } from 'react-apollo-hooks';


const GET_SCOREBOARD_QUERY = gql`
query Scoreboard($claimID: String!) {
  Scoreboard(claimID: $claimID){
  claimID
  rules
  score
  }
}
`;

const ClaimDetails = props => {

  const [detailsState, setDetailsState] = useState(props);
  const { loading, data, error } = useQuery(GET_SCOREBOARD_QUERY, {
    variables: {
      claimID: detailsState.claimID
    }
  })
  // console.log(this.props);

  const displayScoreboard = () => {
    console.log(data);
    if (loading)
      return <p>Loading scoreboard ...</p>
    else {
      return data.Scoreboard.map(claim => {
        return (
          <tr>
            <th >
              <p >{claim.rules}</p>
            </th>
            <td>
              {claim.score}
            </td>
          </tr>
        )
      })
    }

  };

  const statusColor = () => {
    if (detailsState.status == "Fraud" ||detailsState.status =="Rejected"){
      return (
        <div className="scoreCardRed"  >
          <h2>Score Card</h2>
          <h2>{detailsState.score}</h2>
        </div>)
    }
    else {
      return (
        <div className="scoreCard" >
          <h2>Score Card</h2>
          <h2>{detailsState.score}</h2>
        </div>
      )
    }
  };
  
  return (
    // <div id="claim-details">
    //     {this.displayClaimDetails()}
    // </div>


    <div className="row">
      <div className="column">
        <div className="network">
          <h2>Network</h2>
        </div>
        <NodeGraph
          claimID={detailsState.claimID} />
      </div>

      <div className="columnWhite">
        <div className="claimDetail">
          <h2>Claim Details</h2>
        </div>
        <table>
          <tr>
            <td>
              <h6>Claim Id</h6>
              <p> {detailsState.claimID}</p>
            </td>

            <td>
              <h6>Claimant Name</h6>
              <p>
                {detailsState.firstName} {detailsState.lastName}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Reported Date</h6>
              <p> {detailsState.reportedDate}</p>
            </td>

            <td>
              <h6>Telephone Number</h6>
              <p> 0{detailsState.phoneNum}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>IC Number</h6>
              <p> {detailsState.icNum}</p>
            </td>

            <td>
              <h6>Value</h6>
              <p> {detailsState.value}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Status</h6>
              <p>{detailsState.status}</p>
            </td>

            <td>
              <h6>Police Reference #</h6>
              <p> {detailsState.policeNum}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Description</h6>
              <p>{detailsState.description}</p>
            </td>
          </tr>
        </table>
      </div>

      <div className="column">
        {statusColor()}
        <div className="tablescore">
          <table>
            {displayScoreboard()}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClaimDetails;