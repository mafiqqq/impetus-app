
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./createCase.css";
import { useMutation } from 'react-apollo-hooks';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getCasesQuery } from '../queries/queries.js';
import CaseList from './CaseList.js';
import { Redirect } from 'react-router';

const CREATE_CASE_MUTATION = gql`
mutation CreateCase($caseID: Int!, $dueDate:String! , $comment:String! , $task: String!, $caseStatus: String){
    CreateCase(
        caseID: $caseID,
        dueDate: $dueDate,
        comment: $comment,
        task: $task,
        caseStatus: $caseStatus
    ){
        caseID
        comment
    }
}
`

const CREATE_CASE_RELATIONSHIP_MUTATION = gql`
mutation AddCaseClaims($claimID: String!, $caseID: Int!){
AddCaseClaims(
    from:{
        claimID: $claimID,
    }
    to: {
        caseID: $caseID
    }
){from {
    claimID
  }
  to {
    caseID
  }
}
}
`

const CREATE_CLAIMLOG_MUTATION = gql`
mutation CreateClaimLog($claimLogID: String!, $timeLog: String!, $logStatus: String!){
    CreateClaimLog(
        claimLogID: $claimLogID,
        timeLog:{
            formatted: $timeLog
        }, 
        logStatus: $logStatus
    ){
        claimLogID
        timeLog {
            formatted
        }
        logStatus
    }
}
`;

const CreateACase = props => {

    // var count = caseID;
    function getFormattedDate() {
        var date = new Date();
        var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var res = str.toString();
        return res;
    }

    const [createCaseState, setCreateCaseState] = useState(props)
    const [caseID, setCaseID] = useState(9000)
    const [dueDate, setDueDate] = useState("")
    const [comment, setComment] = useState("")
    const [task, setTask] = useState("")
    const [caseStatus, setCaseStatus] = useState("")
    const [CreateCase, { loading, error }] = useMutation(CREATE_CASE_MUTATION, {

        variables: {
            caseID: caseID,
            dueDate: dueDate,
            comment: comment,
            task: task,
            caseStatus: "Open for Enquiry"
        }
    })
    const [AddCaseClaims, { loadingTrue }] = useMutation(CREATE_CASE_RELATIONSHIP_MUTATION, {
        variables: {
            claimID: createCaseState.claimID,
            caseID: caseID
        },
        refetchQueries: [{ query: getCasesQuery }]
    })

    const [CreateClaimLog, { loadingLog }] = useMutation(CREATE_CLAIMLOG_MUTATION, {
        variables: {
            claimLogID: createCaseState.claimID,
            timeLog: getFormattedDate(),
            logStatus: "Case Created"
        }
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(caseID, dueDate, comment, task);
        CreateCase().then(() => {
            AddCaseClaims().then(() => {
                CreateClaimLog().then(() => {
                    document.location = "/CaseList"
                })
            })
        });

        // {<Redirect to='/CaseList' />}
        // if(!error) {
        //     console.log("Completed");
        //     // console.log(CreateCase);
        //     AddCaseClaims();
        // }
        // AddCaseClaims();
        // setCaseID(caseID + 1)
    }


    useEffect(() => {
        const localData = localStorage.getItem('caseID')
        if (localData)
            setCaseID(JSON.parse(localData)+1);
    }, [])

    useEffect(() => {
        localStorage.setItem("caseID", JSON.stringify(caseID));
    })

    return (

        <Popup trigger={<button className="closeClaim" >Create A Case</button>} modal>
            {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                        &times;
          </a>
                    <div className="header">
                        New Case {caseID}
                    </div>

                    <form id="newCase" onSubmit={handleSubmit}>
                        <div className="createCase">
                            <div className="toDo">
                                <div className="comments">
                                    <h5>Comments</h5>
                                    <textarea rows="7" cols="30" name="comment" form="newCase" placeHolder="Enter Comments here..." onChange={(e) => setComment(e.target.value)}>
                                    </textarea>
                                </div>

                                <div className="date">
                                    <h5>Duedate:</h5>
                                    <input className="dueDate" type="date" min="2016-01-01" name="dueDate" form="newCase" onChange={(e) => setDueDate(e.target.value)}></input>
                                </div>

                            </div>
                            <div className="tasks">

                                <h5>Tasks</h5>
                                <textarea rows="10" cols="30" name="Tasks" form="newCase" placeHolder="Enter Tasks here..." onChange={(e) => setTask(e.target.value)}>
                                </textarea>
                            </div>


                        </div>


                        <div className="actions">
                            <button className="button" form="newCase" >Create A Case </button>

                            <button className="button" onClick={() => { close(); }}>Cancel </button>
                        </div>
                    </form>
                </div>

                //  submitForm(e){
                //     e.preventDefault();
                //     // console.log(this.state);
                //     this.props.createCaseMutation({
                //         variables: {
                //             caseId: this.state.caseId,
                //             dueDate: this.state.dueDate,
                //             comment: this.state.comment,
                //             task: this.state.task

                //         },
                //         // refetchQueries:[{query: getPlayersQuery}]
                //     });
                // }

            )}
        </Popup>
    );
}


// constructor(props){
//     super(props)
//     this.state={
//         caseId: "",
//         dueDate: "",
//         comment: "",
//         task: ""
//     }
// }



export default CreateACase;