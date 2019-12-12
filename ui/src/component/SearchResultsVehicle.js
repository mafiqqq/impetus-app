import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";

class SearchResultsVehicle extends Component {
  render() {
    return (
      <div className="searchBackground">
        <div className="cont">
          <h2 className="searchResultLabel">Search Results</h2>
          <div className="searchTable">
            <div>
              <table>
                <tr>
                  <th>Plate Number</th>
                  <th>Owner</th>
                  <th>VIN</th>
                </tr>
                <tr>
                  <td>WLA1234</td>
                  <td>Zahra Mohamed</td>
                  <td>TH12345GGE</td>
                </tr>
                <tr>
                  <td>GGA1234</td>
                  <td>Zahra Mohamed</td>
                  <td>WH19999GGE</td>
                </tr>
                <tr>
                  <td>CDW5656</td>
                  <td>Zahra Mohamed</td>
                  <td>TH44445GGE</td>
                </tr>
              </table>
            </div>
          </div>
          <Link to="/Search">
            <button className="backToSearch">Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchResultsVehicle;
