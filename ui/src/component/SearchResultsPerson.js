import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./mainBase.css";

class SearchResultsPerson extends Component {
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
                  <th>IC Number</th>
                  <th>Name</th>

                  <th>Claim Id</th>

                  <th>Status</th>
                </tr>
                <tr>
                  <td>932904043</td>
                  <td>Novia Hussein</td>

                  <td>1001</td>

                  <td>Rejected</td>
                </tr>
                <tr>
                  <td />
                  <td> </td>
                  <td>1005</td>
                  <td>Open</td>
                </tr>
                <tr>
                  <td>244304043</td>
                  <td>Aiq Mohamed </td>
                  <td>1002</td>
                  <td>Settled</td>
                </tr>
                <tr>
                  <td />
                  <td />
                  <td>1004</td>
                  <td>Fraud</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultsPerson;
