import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getClaimQuery } from "../queries/queries.js";
import "./openedClaim.css";
import NodeGraph from "./NodeGraph.js";

class AlertDetails extends Component {
  render() {
    // console.log(this.props);
    var data = this.props.data;
    console.log(data);
    return (
      <div className="row">
        <div className="column">
          <div className="network">
            <h2>Network</h2>
          </div>
          <NodeGraph 
          claimID={this.props.claimID}/>
        </div>

        <div className="columnWhite">
          <div className="claimDetail">
            <h2>Claim Details</h2>
          </div>
          <table>
            <tr>
              <td>
                <h6>Claim Id</h6>
                <p>{this.props.claimID}</p>
              </td>

              <td>
                <h6>Claimant Name</h6>
                <p>
                  {this.props.firstName} {this.props.lastName}{" "}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Reported Date</h6>
                <p>{this.props.reportedDate}</p>
              </td>

              <td>
                <h6>Telephone Number</h6>
                <p>0{this.props.phoneNum}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>IC Number</h6>
                <p> {this.props.icNum}</p>
              </td>

              <td>
                <h6>Value</h6>
                <p>{this.props.value}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Status</h6>
                <p>{this.props.status}</p>
              </td>

              <td>
                <h6>Police Reference #</h6>
                <p> {this.props.policeNum}</p>
              </td>
            </tr>
            <tr>
              <td>
                <h6>Description</h6>
                <p>{this.props.description}</p>
              </td>
            </tr>
          </table>
        </div>

        <div className="column">
          <div className="scoreCardRed">
            <h2>Score Card</h2>
            <h2>500</h2>
          </div>
          <div className="tablescore">
            <table>
              <tr>
                <th>Claim</th>
              </tr>
              <tr>
                <td>
                  <p>the value of claim is RM8900</p>
                </td>
                <td>310</td>
              </tr>
              <br />

              <tr>
                <th>Person</th>
              </tr>

              <tr>
                <td>
                  <p>Ameerul has 5 previous claims</p>
                </td>
                <td>50</td>
              </tr>
              <br />

              <tr>
                <th>Vehicle</th>
              </tr>
              <tr>
                <td>
                  <p>the vehicle was involve in 2 other accidents</p>
                </td>
                <td>100</td>
              </tr>
              <br />

              <tr>
                <th>Accident</th>
              </tr>
              <tr>
                <td>
                  <p>the Accident happened late at midnight</p>
                </td>
                <td>40</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getClaimQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.claimID
            }
        }
    }
})(AlertDetails);
