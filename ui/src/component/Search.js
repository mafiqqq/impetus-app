import React, { Component } from "react";
import { Link } from "react-router-dom";

import Tabs from "./Tabs";
require("./tabs.css");
require("./search.css");

class Search extends Component {
  render() {
    return (
      <div className="searchBackground">
        <div className="cont">
          <h2 className="searchLabel">Search</h2>
          <div className="searchOption">
            <Tabs>
              <div label="Person">
                <form action="#">
                  <div className="searchDetails">
                    <input
                      type="text"
                      className="details"
                      name="details"
                      id=""
                    />
                    <Link to="/SearchResultsPerson">
                      <button className="search">Search</button>
                    </Link>
                    <br />
                    <input
                      type="radio"
                      className="radio"
                      name="person"
                      id="Name"
                    />
                    <label htmlFor="Name"> Name</label>
                    <input
                      type="radio"
                      className="radio"
                      name="person"
                      id="Identification"
                    />
                    <label htmlFor="Identification">
                      {" "}
                      Identification Number
                    </label>
                  </div>
                </form>
              </div>

              <div label="Claim">
                <form action="#">
                  <div className="searchDetails">
                    <input
                      type="text"
                      className="details"
                      name="details"
                      id=""
                    />
                    <Link to="/SearchResultsClaim">
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
                    <input
                      type="radio"
                      className="radio"
                      name="claim"
                      id="claimDate"
                    />
                    <label htmlFor="claimDate"> Claim Date</label>
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
                    />
                    <Link to="/SearchResultsVehicle">
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
                    <input
                      type="radio"
                      className="radio"
                      name="vehicle"
                      id="owner"
                    />
                    <label htmlFor="owner"> Owner</label>
                    <input
                      type="radio"
                      className="radio"
                      name="vehicle"
                      id="vin"
                    />
                    <label htmlFor="vin"> Vehicle Identification Number</label>
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
                    />
                    <Link to="/SearchResultsAccident">
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
                    <input
                      type="radio"
                      className="radio"
                      name="accident"
                      id="reportedDate"
                    />
                    <label htmlFor="reportedDate"> Reported Date</label>
                  </div>
                </form>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

// const Search = () => {

//     return (
//     )
// }

export default Search;
