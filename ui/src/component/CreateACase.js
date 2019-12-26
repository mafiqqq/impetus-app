
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "./createCase.css";
import { useMutation } from 'react-apollo-hooks';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getCasesQuery } from '../queries/queries.js';
import CaseList from './CaseList.js';
import { Redirect } from 'react-router';
// import DatePicker from "react-datepicker";
import DatePicker from 'react-date-picker';
// import "react-datepicker/dist/react-datepicker.css";

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
    const [startDate, setStartDate] = useState(new Date())
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

    // const handleChange = date => {
    //     setStartDate(date);
    // }
    // function  callDate() {
    //     return(
    //         <DatePicker selected={startDate} onChange={date => setStartDate(date)} ref="picker" onClickOutside={clickOutside()}/>
    //     )
    // }

    // function clickOutside() {
    //     this.refs.picker.cancelFocusInput();
    //     this.refs.picker.setOpen(false);
    // }
    function handleSubmit(caseID, startDate, comment, task) {
        // evt.preventDefault();
        console.log(caseID, startDate, comment, task);
              
        // var startD = startDate.toString();
        var formattedS = startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate()
        var formattedD = formattedS.toString();
        // var dateFormat = startD.substring(4,16);
        setCaseID(caseID);
        setComment(comment);
        setTask(task);
        setDueDate(toString(formattedD));
        console.log(formattedD);
        console.log(task);
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
            setCaseID(JSON.parse(localData) + 1);
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

                    <form id="newCase" >
                        <div className="createCase">
                            <div className="toDo">
                                <div className="comments">
                                    <h5>Comments</h5>
                                    <textarea rows="7" cols="30" name="comment" form="newCase" placeholder="Enter Comments here..." onChange={(e) => setComment(e.target.value)}>
                                    </textarea>
                                    {/* <input type="date"></input> */}
                                </div>

                                <div className="comments">
                                    {/* <h5>Comments</h5>
                                    <textarea rows="7" cols="30" name="comment" form="newCase" placeholder="Enter Comments here..." onChange={(e) => setDueDate(e.target.value)}>
                                    </textarea> */}
                                    {/* <h5>Duedate:</h5>
                                    <input  type="date" form="newCase" onChange={(e) => setDueDate(e.target.value)}></input> */}
                                    {/* {callDate()} */}
                                    <DatePicker onChange={date => setStartDate(date)} value={startDate}/>
                                </div>

                            </div>
                            <div className="tasks">

                                <h5>Tasks</h5>
                                <textarea rows="10" cols="30" name="Tasks" form="newCase" placeholder="Enter Tasks here..." onChange={(e) => setTask(e.target.value)}>
                                </textarea>
                            </div>


                        </div>


                        <div className="actions">
                            {/* <input type="submit"></input> */}
                            <button className="button" form="newCase" onClick={() => {handleSubmit(caseID, startDate, task, comment)}}>Create A Case </button>

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