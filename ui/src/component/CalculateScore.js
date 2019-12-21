import React, { useState, useEffect } from "react";
import { Container, Button } from "react-floating-action-button";
import { useMutation, useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { getClaimsQuery } from "../queries/queries";

const CLAIMS_SCORE_QUERY = gql`
query Claim {
    Claim {
    claimID
 	score
    value
    accidents{
      accidentTime
    }
    persons{
      healthcares{
        Healthcare{
          healthcareFraud
          healthcareID
        }
      }
      drivers{
        garage{
          Garage{
            garageFraud
          }
        }
      }
    }
}
}
`;

const CREATE_SCOREBOARD_MUTATION = gql`
mutation CreateScoreboard($claimID: String!, $rules: String!, $score: Int){
    CreateScoreboard(
        claimID: $claimID,
        rules: $rules,
        score: $score 
    ){
        claimID
        rules
        score
    }
}
`;

const UPDATE_CLAIM_SCORE_MUTATION = gql`
mutation UpdateClaim($claimID: String!, $score: Int!){
        UpdateClaim(claimID: $claimID, score: $score){
            claimID
            score
        }
    }
`;



const CalculateScore = props => {

    const [calcScore, setCalcScore] = useState(props);
    const [claimBoardID, setClaimBoardID] = useState("");
    const [total, setTotal] = useState(0);
    const [scoreValue, setScoreValue] = useState(0);
    const { loading, error, data } = useQuery(CLAIMS_SCORE_QUERY, {

    });

    const [CreateScoreboard, { loadingCreateScoreboard }] = useMutation(CREATE_SCOREBOARD_MUTATION);
    const [UpdateClaim, { loadingUpdateClaim }] = useMutation(UPDATE_CLAIM_SCORE_MUTATION);
    // claimBoardID: "",
    // rules: "",
    // score: 0
    // refetchQueries: [{query: getClaimsQuery}]


    const totalScore = () => {
        if (loading) return <p>Calculating score...</p>
        else {
            console.log(data);
            return data.Claim.map(claims => {
                if (claims.score == 0) {
                    var values, accidentTime, healthFraud, garageFraud = 0;
                    values = getClaimValueScore(claims.claimID, claims.value);
                    accidentTime = getAccidentTimeScore(claims.claimID, claims.accidents.map(x => x.accidentTime));
                    var healthStatus = claims.persons.map(y => y.healthcares.map(z => z.Healthcare.healthcareFraud));
                    var garageStatus = claims.persons.map(x => x.drivers.map(y => y.garage.map(z => z.Garage.garageFraud)));
                    if (healthStatus != null) {
                        healthFraud = getHealthcareFraud(claims.claimID, healthStatus);
                    } else if (garageStatus != null) {
                        garageFraud = getGarageFraud(claims.claimID, garageStatus);
                    }
                    var total = values + accidentTime + healthFraud + garageFraud;
                    console.log("Values " + values);
                    console.log("Accident time " + accidentTime);
                    console.log("healthfraud " + healthFraud);
                    console.log("garageFraud " + garageFraud);
                    console.log("Total is " + total);
                    updateScoreValue(claims.claimID, total);
                }
            })
        }
    }

    function getClaimValueScore(claimID, value) {
        var scoreOfValue = (value / 100) * 2;
        var rulesOfValue = "The value of Claims";

        // console.log("2 function"+claimID);
        CreateScoreboard({
            variables: {
                claimID: claimID,
                rules: rulesOfValue,
                score: scoreOfValue
            }
        });
        return parseInt(scoreOfValue);
    }

    function getAccidentTimeScore(claimID, accidentTime) {
        // console.log("Accident time "+accidentTime);
        var str = accidentTime.toString();
        var formattedTime = str.substring(0, 2);
        var intTime = parseInt(formattedTime);
        // console.log("Int time " + intTime);
        if (21 < intTime < 5) {
            var scoreOfAccidentTime = 40;
            var rulesOfAccidentTime = "The accident took place during late night between 22:00 hours and 04:00 hours"
            console.log(scoreOfAccidentTime);
            CreateScoreboard({
                variables: {
                    claimID: claimID,
                    rules: rulesOfAccidentTime,
                    score: scoreOfAccidentTime
                }
            });
        }

        return parseInt(scoreOfAccidentTime);
    }

    function getHealthcareFraud(claimID, healthcareFraud) {
        console.log("Claim ID Health " + claimID);
        console.log("Healthcre Fraud " + healthcareFraud);
        var scoreOfHealthcareFraud = healthcareFraud * 100;
        var rulesOfHealthcareFraud = "The Healthcare has been identified involved in other " + healthcareFraud + " Fraudulent claims"
        CreateScoreboard({
            variables: {
                claimID: claimID,
                rules: rulesOfHealthcareFraud,
                score: scoreOfHealthcareFraud
            }
        });

        return parseInt(scoreOfHealthcareFraud);
    }

    function getGarageFraud(claimID, garageFraud) {
        console.log("Garage Fraud" + garageFraud);
        var scoreOfGarageFraud = garageFraud * 100;
        var rulesOfGarageFraud = "The Garage has been identified involved in other " + garageFraud + " Fraudulent claims"
        CreateScoreboard({
            variables: {
                claimID: claimID,
                rules: rulesOfGarageFraud,
                score: scoreOfGarageFraud
            }
        });
        return parseInt(scoreOfGarageFraud);
    }

// function getLawfirmFraud(claimID, lawfirmFraud) {
//     return 8;
// }

function updateScoreValue(claimID, total) {
    UpdateClaim({
        variables: {
            claimID: claimID,
            score: total
        },
        refetchQueries: [{ query: getClaimsQuery }]
    })
}


useEffect(() => {
    console.log("Updated score" + scoreValue, scoreValue);
}, [scoreValue]);

useEffect(() => {
    console.log("Claim Board useEffect" + claimBoardID, claimBoardID);
    // setClaimBoardID()
}, [claimBoardID]);

return (
    <Container>
        <Button
            tooltip="Calculate the score of claims"
            onClick={() => {
                
                // console.log(data);
                totalScore();
                // getClaimValueScore("6000");
            }}
        >
            Calculate
          </Button>
    </Container>
)

}

export default CalculateScore;