import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CaseDetails from './CaseDetails.js';
import AlertDetails from './AlertDetails.js';
// import Workshop from './Workshop.js';
import LocationView from './LocationView.js';
import Dropdown from './AlertHamburgerB.js';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { getCasesQuery } from '../queries/queries.js';
import { useLocation } from 'react-router';
import "./openedCase.css";
import NodeGraphExpand from './NodeGraphExpand.js';


function OpenCase() {


    const location = useLocation();
    console.log(location.state);
    console.log("Claim Yooo "+location.state.claimID)
    return (
        <div className="row">
            <div className="OpenedClaim">

                <button className="claimId">
    <button className="openedClaimId"> {location.state.caseID}</button>
                    <Link to='/CaseList'>
                        <p class="x">X</p>
                    </Link></button>
            </div>
            <span className="tab">
                <Tabs>
                    <TabList>
                        <div className="blank">
                            <h1></h1></div>
                        <Tab ><h4>Case Details</h4></Tab>
                        <Tab><h4>Alert Details</h4></Tab>
                        <Tab><h4>Workshop</h4></Tab>
                        <Tab><h4>Location View</h4></Tab>
                    </TabList>
                    <TabPanel>
                        <CaseDetails 
                        caseID={location.state.caseID}
                        comment={location.state.comment}
                        dueDate={location.state.dueDate}
                        task={location.state.task}
                        caseStatus={location.state.caseStatus}
                        claimID={String(location.state.claimID)}
                        firstName={String(location.state.firstName)}
                        lastName={String(location.state.lastName)}
                        />
                    </TabPanel>
                    <TabPanel>
                        <AlertDetails 
                        claimID={String(location.state.claimID)}
                        reportedDate={location.state.reportedDate}
                        icNum={String(location.state.icNum)}
                        status={String(location.state.status)}
                        score={location.state.score}
                        description={String(location.state.description)}
                        firstName={String(location.state.firstName)}
                        lastName={String(location.state.lastName)}
                        phoneNum={String(location.state.phoneNum)}
                        value={String(location.state.value)}
                        policeNum={String(location.state.policeNum)}/>
                    </TabPanel>
                    <TabPanel>
                        <div className="graph">
                        <NodeGraphExpand 
                        claimID={String(location.state.claimID)}/></div>
                    </TabPanel>
                    <TabPanel>
                        <LocationView 
                        claimID={String(location.state.claimID)}/>
                    </TabPanel>
                </Tabs>
            </span>
        </div>
    )
}
export default graphql(getCasesQuery)(OpenCase);