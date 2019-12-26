import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";
import { useLocation } from 'react-router';
import { useMutation, useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

function SearchResultsAccident() {

  const location = useLocation();
  const ACCIDENTS_SEARCH_QUERY = gql`
  query Accident($filter: String!){
    Accident(filter: {policeNum: $filter}){
    policeNum
    accidentDate
  	claims{
      claimID
      status
    }
  }
  }
  `;

  const { loading, error, data } = useQuery(ACCIDENTS_SEARCH_QUERY, {
    variables: {
      filter: location.state.policeNum
    }
  });

  const displayResults = () => {
    if (loading) return <p>Loading...</p>
    else {
      return data.Accident.map(accident => {
        return (
          <tr>
            <td>{accident.policeNum}</td>
            <td>{accident.accidentDate}</td>
            <td>{accident.claims.map(x=>x.claimID + ", ")}</td>
            <td>{accident.claims.map(x=>x.status + ",")}</td>
          </tr>
        )
      })
    }
  }

  return (
    <div className="searchBackground1">
      <div className="cont1">
        <div className="resultdiv">
          <h2 className="searchResultLabel">
            Search Results{" "}
            <Link to="/">
              <button className="backToSearch">Back</button>
            </Link>
          </h2>
        </div>{" "}
        <div className="searchTable">
          <div>
            <table>
              <tr>
                <th>Police Report Number</th>
                <th>Reported Date</th>
                <th>Claim Id</th>
                <th>Status</th>
              </tr>
              {displayResults()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SearchResultsAccident;
