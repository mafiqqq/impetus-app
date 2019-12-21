import { gql } from 'apollo-boost';


//get Accidents query 
const getAccidentsQuery = gql`
{
    Accident {
        accidentID
        state
    }
}
`

//get Claims query
const getClaimQuery = gql`
query($id: String){
    Claim(claimID: $id)  {
        claimID
        description
        value
        status
        reportedDate  
        persons{
            firstName
            lastName
            phoneNum
            icNum
        }
        accidents {
            accidentID
            #policeReference
        }
    }
}
`

//get One Claim query
const getClaimsQuery = gql`
{
Claim(filter: {OR: [{score_lte:500}, {status:"Fraud"}]}){
        claimID
        score
        value
        status
        reportedDate
        description
        accidents {
            city
            policeNum 
        }
        persons {
            firstName
            lastName
            icNum
            phoneNum
        }
        
    }
}
`

//get Alert Lisy query
const getAlertsQuery = gql`
{
Claim(filter:{score_gt:500}){
        claimID
        score
        value
        status
        reportedDate
        description
        accidents {
            city
            policeNum
            accidentDate 
        }
        persons {
            firstName
            lastName
            icNum
            phoneNum
        }
        
    }
}
`

//Get Cases Query
const getCasesQuery = gql`
{
    Case{
    caseID
  	comment
    task
    dueDate
    caseStatusFilter {
      caseStatus
    }
    claims{
      claimID
      reportedDate
      value
      description
      status
      accidents{
        policeNum
      }
      persons{
        firstName
        lastName
        phoneNum
        icNum
      }
    }
  }
}
`

//Get score claim
const getScoreQuery = gql`
query($id: String){
    Claim(claimID: $id){
        score
    }
}
`;



//Get Accident Location
const getLocationAccidentQuery = gql`
{
    Accident{
        accidentID
        latitude
        longitude
        street
        city
        claims {
            claimID
            persons {
                firstName
            }
        }
    }
}
`


//get Claims query
const getDynamicAccLocation = gql`
query($id: String){
    Claim(claimID: $id)  {
      claimID
    accidents{
      accidentID
    	involves{
        vehicleID
        passengers{
          claims{
            claimID
            accidents{
              accidentID
              latitude
              longitude
              street
              city
              claims {
                claimID
              }
            }
          }
        }
        drivers{
          claims{
            claimID
            accidents{
              accidentID
              latitude
              longitude
              street
              city
              claims {
                claimID
              }
            }
          }
        }
      }
      }
    }
}
`

//Settle Claim Update Mutation 
const updateClaimMutation = gql`
mutation($claimID: String!, $status: String!){
    UpdateClaim(claimID: $claimID, status: $status){
        claimID
        status
    }
}
`


//create Case Mutation 
// const addCaseQuery = gql`
//     mutation($caseID: String!, $dueDate: String!, $task: String!, $comment: String ){   
//         addCase(caseID: $caseID, dueDate: $dueDate, task: $task, comment: $comment){

//         }

//     }
// `

// //create the query
// const getPlayersQuery = gql`
// {
//     #This name 'Player' will be used later at data.props
//     Player {
//         name
//         id
//     }
// }
// `

//create the query
// const getClubsQuery = gql`
// {
//     #This name 'Player' will be used later at data.props
//     Club {
//         name
//         id
//     }
// }
// `

// const createPlayerMutation = gql`
//     mutation($id: String!, $name: String!){
//         CreatePlayer(id: $id, name: $name){
//             id
//             name
//         }
//     }

// `

// const getPlayerQuery=gql`
//     query($id: String){
//         Player(id: $id){
//             id
//             name
//   	        transfers {
//                 id
//                 value
//                 from_club{
//                     name
//                 }
//                 # to_club{
//                 #     name
//                 # }
//         }
//     }
//     }
// `


export {
    getClaimsQuery,
    getClaimQuery,
    getLocationAccidentQuery,
    getAccidentsQuery,
    getDynamicAccLocation,
    updateClaimMutation,
    getAlertsQuery,
    getCasesQuery,
    getScoreQuery

};
// getPlayersQuery, getClubsQuery, createPlayerMutation, getPlayerQuery,