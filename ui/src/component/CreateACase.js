
import React, {useState, useEffect} from "react";
import Popup from "reactjs-popup";
import "./createCase.css";
import {useMutation} from 'react-apollo-hooks';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getCasesQuery } from '../queries/queries.js';

const CREATE_CASE_MUTATION = gql`
mutation CreateCase($caseID: Int!, $dueDate:String! , $comment:String! , $task: String!){
    CreateCase(
        caseID: $caseID,
        dueDate: $dueDate,
        comment: $comment,
        task: $task
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

const CreateACase = props => {

    
    const [createCaseState, setCreateCaseState] = useState(props)
    const [caseID, setCaseID] = useState(9005)
    const [dueDate, setDueDate] = useState("")
    const [comment, setComment] = useState("")
    const [task, setTask] = useState("")
    const [CreateCase, {loading}] = useMutation(CREATE_CASE_MUTATION, {
        variables: {
            caseID: caseID,
            dueDate: dueDate,
            comment: comment,
            task: task,
            status: "Open"
        },
        refetchQueries: [{query: getCasesQuery}]
    })
    const [AddCaseClaims, {loadingTrue}] = useMutation(CREATE_CASE_RELATIONSHIP_MUTATION, {
        variables: {
            claimID: createCaseState.claimID,
            caseID: caseID
        },
        refetchQueries: [{query: getCasesQuery}] 
    })


    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(caseID, dueDate,comment, task);
        console.log(props);
        CreateCase();
        AddCaseClaims();
        setCaseID(caseID + 1)
    }


    useEffect(() => {

    }, [])

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

                    <form id="newCase"  onSubmit={handleSubmit}>
                        <div className="createCase">
                            <div className="toDo">
                                <div className="comments">
                                    <h5>Comments</h5>
                                    <textarea rows="7" cols="30" name="comment" form="newCase" placeHolder="Enter Comments here..." onChange={(e) => setComment(e.target.value)}>
                                    </textarea>
                                </div>

                                <div className="date">
                                    <h5>Duedate:</h5>
                                    <input className="dueDate" type="date" name="dueDate" form="newCase" onChange={(e)=>setDueDate(e.target.value)}></input>
                                </div>

                            </div>
                            <div className="tasks">

                                <h5>Tasks</h5>
                                <textarea rows="10" cols="30" name="Tasks" form="newCase" placeHolder="Enter Tasks here..." onChange={(e) => setTask(e.target.value)}>
                                </textarea>
                            </div>


                        </div>


                        <div className="actions">
                            <button className="button-green" form="newCase" >Create A Case </button>

                            <button className="button-red" onClick={() => { close(); }}>Cancel </button>
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