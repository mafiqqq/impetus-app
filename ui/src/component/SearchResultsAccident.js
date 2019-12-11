import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";

class SearchResultsAccident extends Component {
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
                <tr>
                  <td>LR87766</td>
                  <td>21/01/2011</td>
                  <td>1005</td>
                  <td>Settle</td>
                </tr>
                <tr>
                  <td>GW87766</td>
                  <td>21/01/2011</td>
                  <td>1006</td>
                  <td>Settle</td>
                </tr>
                <tr>
                  <td>LWW27766</td>
                  <td>21/01/2011</td>
                  <td>1007</td>
                  <td>Open</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultsAccident;
