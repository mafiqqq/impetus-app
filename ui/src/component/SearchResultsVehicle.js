import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";
import { useLocation } from 'react-router';
import { useMutation, useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

function SearchResultsVehicle() {

  const location = useLocation();
  const VEHICLES_SEARCH_QUERY = gql`
  query Vehicle($filter: String!){
    Vehicle(filter: {plateNumber_contains: $filter}){
      plateNumber
    vin
    accidents{
      accidentID
    }
    }
  }
  `

  const { loading, error, data } = useQuery(VEHICLES_SEARCH_QUERY, {
    variables: {
      filter: location.state.plateNumber
    }
  })

  const displayResults = () => {
    if (loading) return <p>Loading...</p>
    else {
      return data.Vehicle.map(vehicle => {
        return (
          <tr>
            <td>{vehicle.plateNumber}</td>
            <td>{vehicle.accidents.map(x => x.accidentID)}</td>
            <td>{vehicle.vin}</td>
          </tr>
        )
      })
    }
  }

  return (
    <div className="searchBackground1">
      <div className="cont1">
        <h2 className="searchResultLabel">Search Results
        <Link to="/">
          <button className="backToSearch">Back</button>
        </Link>
        </h2>
        <div className="searchTable">
          <div>
            <table>
              <tr>
                <th>Plate Number</th>
                <th>Accident ID</th>
                <th>Chassis Number</th>
              </tr>
              {displayResults()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );

}

export default SearchResultsVehicle;
