import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";

class SearchResultsClaim extends Component {
  render() {
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
                <tr>
                  <td>Afiq Mohamed</td>
                  <td>1001</td>
                  <td>Rejected</td>
                  <td>22/04/2000</td>
                </tr>
                <tr>
                  <td>Waran Leve</td>
                  <td>1003</td>
                  <td>Settle</td>
                  <td>22/04/2000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultsClaim;
