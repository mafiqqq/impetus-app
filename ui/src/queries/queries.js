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
Claim{
        claimID
        normalScore{
            score
        }
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
Claim{
        claimID
        alertScore {
            score
        }
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
    caseStatus
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
    getCasesQuery

};
// getPlayersQuery, getClubsQuery, createPlayerMutation, getPlayerQuery,