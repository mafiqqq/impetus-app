import React, { Component } from "react";
import { graphql } from 'react-apollo';


class CaseList extends Component {

    render() {
        return (
            <div>
                <table className='claims'>
                    <tr>
                        <th>Claim Id</th>

                        <th>Task</th>
                        <th>Claim Date</th>
                        <th>Value</th>
                        <th>Due Date</th>
                        <th>Claim By</th>
                    </tr>
                    <tr>
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

export default CaseList;