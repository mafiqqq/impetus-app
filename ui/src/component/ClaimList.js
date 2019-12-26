import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-floating-action-button";
import { graphql } from "react-apollo";
import { getClaimsQuery, getScoreQuery } from "../queries/queries.js";
import "./claim.css";
import CalculateScore from "./CalculateScore.js";

//components
// import ClaimDetails from "./ClaimDetails.js";

class ClaimList extends Component {
  constructor(props) {
    super(props);
    // this.calculateClaimValue = this.calculateClaimValue.bind(this);
    this.state = {
      selected: null,
      claims: "",
      scoreCount: 0
    };
  }

  setClaims = object => {
    this.setState({
      claims: object
    });
  };

  setScoreCount = int => {
    this.setState({
      scoreCount: this.scoreCount + int
    })
  }

  displayClaims() {
    var data = this.props.data;
    // console.log(this.props);
    // const claimD = this.setClaims(this.props.data);
    if (data.loading) {
      return <div>Loading Claims...</div>;
    } else {
      return data.Claim.map(claim => {
        return (
          <tr id="somerow">
            <td>
              <Link
                to={{
                  pathname: "/OpenClaim",
                  state: {
                    claimID: claim.claimID,
                    reportedDate: claim.reportedDate,
                    icNum: claim.persons.map(x => x.icNum),
                    status: claim.status,
                    score: claim.score,
                    description: claim.description,
                    firstName: claim.persons.map(x => x.firstName),
                    lastName: claim.persons.map(x => x.lastName),
                    phoneNum: claim.persons.map(x => x.phoneNum),
                    value: claim.value,
                    policeNum: claim.accidents.map(x => x.policeNum)
                  }
                }}
              >
                {claim.claimID}
              </Link>
            </td>
            <td data-status={claim.status} className="claimStatus"></td>
            <td id="scoretd">{claim.score}</td>
            <td>RM {claim.value}</td>
            <td>{claim.persons.map(x => x.firstName)}</td>
            <td>{claim.persons.map(x => x.lastName)}</td>
            <td>{claim.accidents.map(x => x.city)}</td>
            <td>{claim.reportedDate}</td>
          </tr>
        );
      });
    }
  }

  displayScore = () => {
    var table = document.getElementById("claimsTable");
    for (var i = 1, row; row = table.rows[i]; i++) {
      var s = document.getElementById("claimsTable").rows[i].cells.namedItem("scoretd").innerHTML;
      if (s < 400) {
        var data = this.props.data;
        if (data.loading) {
          console.log("Calculating..")
        } else {
          var scoreCount = 0;
          const calculateClaimValue = () => {
            return data.Claim.map(claim => {
              var value = claim.value;
              var calcValue = (value / 100) * 5;
              this.setScoreCount(calcValue);
            },
              console.log(this.scoreCount))
          }

          console.log("Hi");


        }


      }
    }
    this.calculateClaimValue();
    // this.calculateClaimValue();    
    // console.log(this.scoreCount)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <table className="claims" id="claimsTable">
          <tr>
            <th>Claim ID</th>
            <th>Status</th>
            <th>Score</th>
            <th>Value</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Reported Date</th>
          </tr>
          {/* {console.log(this.props)} */}
          {this.displayClaims()}
        </table>
        {/* <ClaimDetails claimID={ this.state.selected }/> */}
        <CalculateScore />
      </div>
      // <div>
      //     <ul id="claim-list">
      //         { this.displayClaims() }
      //     </ul>
      // </div>
    );
  }
}

export default graphql(getClaimsQuery)(ClaimList);
