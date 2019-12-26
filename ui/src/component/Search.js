import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withApollo } from 'react-apollo'
import Tabs from "./Tabs";
// import { frob } from "gl-matrix/src/gl-matrix/mat2";
import gql from 'graphql-tag';
import { filter } from "graphql-anywhere";
require("./tabs.css");
require("./search.css");


const Search = props => {

  const [searchClaim, setSearchClaim] = useState("")
  const [searchPerson, setSearchPerson] = useState("")
  const [searchVehicle, setSearchVehicle] = useState("")
  const [searchAccident, setSearchAccident] = useState("")


  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <div className="searchBackground">
      <div className="cont">
        <div className="searchOption">
          <Tabs>
          <div label="Claim">
              <form action="#">
                <div className="searchDetails">
                  <input
                    type="text"
                    className="details"
                    name="details"
                    id=""
                    placeholder="E.g. 6000"
                    onChange={(e) => setSearchClaim(e.target.value)}
                  />
                  <Link to={
                    {
                      pathname: "/SearchResultsClaim",
                      state: {
                        claimID: searchClaim
                      }
                    }
                  }>
                    <button className="search">Search</button>
                  </Link>{" "}
                  <br />
                  <input
                    type="radio"
                    className="radio"
                    name="claim"
                    id="claimNum"
                    checked
                  />
                  <label htmlFor="claimNum"> Claim Number</label>
                </div>
              </form>
            </div>
            <div label="Person">
              {/* <form action="#" onSubmit={handleSubmit}> */}
              <form action="#">
                <div className="searchDetails">
                  <input
                    type="text"
                    className="details"
                    name="details"
                    id=""
                    placeholder="E.g. chiweic@gmail.com"
                    onChange={(e) => setSearchPerson(e.target.value)}
                  />
                  <Link to={
                    {
                      pathname: "/SearchResultsPerson",
                      state: {
                        icNum: searchPerson
                      }
                    }
                  }>
                    <button className="search">Search</button>
                  </Link>
                  <br />
                  <input
                    type="radio"
                    className="radio"
                    name="person"
                    id="Identification"
                    checked
                  />
                  <label htmlFor="Identification">
                    {" "}
                    E-mail
                    </label>
                </div>
              </form>
            </div>

  
            <div label="Vehicle">
              <form action="#">
                <div className="searchDetails">
                  <input
                    type="text"
                    className="details"
                    name="details"
                    id=""
                    placeholder="E.g. SAD 1234"
                    onChange={(e) => { setSearchVehicle(e.target.value) }}
                  />
                  <Link to={
                    {
                      pathname: "/SearchResultsVehicle",
                      state: {
                        plateNumber: searchVehicle
                      }
                    }
                  }>
                    <button className="search">Search</button>
                  </Link>{" "}
                  <br />
                  <input
                    type="radio"
                    className="radio"
                    name="vehicle"
                    id="plateNum"
                    checked
                  />
                  <label htmlFor="plateNum"> Plate Number</label>
                </div>
              </form>
            </div>
            <div label="Accident">
              <form action="#">
                <div className="searchDetails">
                  <input
                    type="text"
                    className="details"
                    name="details"
                    id=""
                    placeholder="E.g. GHTA32VZ11"
                    onChange={(e) => { setSearchAccident(e.target.value) }}
                  />
                  <Link to={
                    {
                      pathname: "/SearchResultsAccident",
                      state: {
                        policeNum: searchAccident
                      }
                    }
                  }>
                    <button className="search">Search</button>
                  </Link>{" "}
                  <br />
                  <input
                    type="radio"
                    className="radio"
                    name="accident"
                    id="Police Report Number"
                    checked
                  />
                  <label htmlFor="policeReportNumber">
                    {" "}
                    Police Report Number
                    </label>
                </div>
              </form>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );

}

// const Search = () => {

//     return (
//     )
// }

export default withApollo(Search);
