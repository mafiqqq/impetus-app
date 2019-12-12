import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";
import { useLocation } from 'react-router';
import { useMutation, useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';


function SearchResultsClaim() {

  const location = useLocation();

  // displayResults(){
  //   var data = this.props.data;

  // }

  const CLAIMS_SEARCH_QUERY = gql`
    query Claim($filter: String!) {
      Claim(filter: {claimID: $filter}) {
        claimID
        status
        reportedDate
        persons {
          firstName
          lastName
        }
      }
    }
    `;

  const { loading, error, data } = useQuery(CLAIMS_SEARCH_QUERY, {
    variables: {
      filter: location.state.claimID
    }
  });


  // console.log(data);
  // console.log("hi");

  const displayResults = () => {
    if (loading) return <p>Loading....</p>
    else {
      return data.Claim.map(claims => {
        return(
        <tr>
      <td>{claims.persons.map(x=> x.firstName) +" "+ claims.persons.map(x=> x.lastName)}</td>
      <td>{claims.claimID}</td>
      <td>{claims.status}</td>
        <td>{claims.reportedDate}</td>
        </tr>
      )})
    }
  }
    return (
      <div className="searchBackground">
        <div className="cont">
          <div className="resultdiv">
            <h2 className="searchResultLabel">
              Search Results{" "}
              <Link to="/Search">
                <button className="backToSearch">Back</button>
              </Link>
            </h2>
          </div>
          <div className="searchTable">
            <div>
              <table>
                <tr>
                  <th>Claimant Name</th>
                  <th>Claim Id</th>
                  <th>Status</th>
                  <th>Claim Date</th>
                </tr>
                {displayResults()}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }




export default SearchResultsClaim;
