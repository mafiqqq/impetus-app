import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";
import { useLocation } from 'react-router';
import { useMutation, useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

function SearchResultsPerson() {


  const location = useLocation();

  const PERSONS_SEARCH_QUERY = gql`
  query Person($filter: String!) {
    Person(filter: {icNum:$filter}){
    icNum
    firstName
    lastName
    claims{
      claimID
      status
    }
  }
  }
  `;

  const { loading, error, data } = useQuery(PERSONS_SEARCH_QUERY, {
    variables: {
      filter: location.state.icNum
    }
  })

  const displayResults = () => {
    if (loading) return <p>Loading...</p>
    else {
      return data.Person.map(person => {
        return (
          <tr>
            <td>{person.icNum}</td>
            <td>{person.firstName + " " + person.lastName}</td>
            <td>{person.claims.map(x=> x.claimID)}</td>
            <td>{person.claims.map(x=> x.status)}</td>
          </tr>
        )
      })
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
                <th>IC Number</th>
                <th>Name</th>
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

export default SearchResultsPerson;
