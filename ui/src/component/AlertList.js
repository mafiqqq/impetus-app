import React, { Component } from "react";
import { Link } from 'react-router-dom';


class AlertList extends Component{

    render(){
        return(
            <div>
            <table className='claims'>
                <tr>
                    <th>Claim Id</th>
                    <th>Score</th>
                    <th>Value</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Reported Date</th>
                    <th>Accident Date</th>
                </tr>
                <tr>
                <td><Link to='/OpenClaim'>1001</Link></td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>
                <td>1001</td>

            </tr>
            </table>
        </div>
        )
    }

}

export default AlertList;