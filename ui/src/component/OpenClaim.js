import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ClaimDetails from './ClaimDetails.js';
import Workshop from './Workshop.js';
import Location from './Location.js';
import LocationView from './LocationView.js';
import NodeGraphExpand from './NodeGraphExpand.js';
import Dropdown from './ClaimHamburgerB.js';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { getClaimsQuery } from '../queries/queries.js';
import { useLocation } from 'react-router';
import "./openedClaim.css";


function OpenClaim() {

    // constructor(props){
    //     super(props);
    //     // console.log(props);
    // };

    const location = useLocation();
    // console.log(location);

    // render() {
    function displayDrop(status) {
        if (status == "Settled" || status =="Rejected") {
            return (
                <div></div>
            )
        }
        else {
            return (
                <Dropdown
                    claimID={location.state.claimID}
                    status={location.state.status}
                />
            )
        }
    }


return (

    <div className="row">
        <div className="OpenedClaim">

            <button className="claimId">
                <button className="openedClaimId">{location.state.claimID}</button>
                <Link to='/ClaimList'>
                    <p class="x">X</p>
                </Link></button>
        </div>
        <span className="tab">
            <Tabs>
                <TabList>
                    {displayDrop(location.state.status)}
                    <Tab><h4>Claim Details</h4></Tab>
                    <Tab><h4>Claim Graphical View</h4></Tab>
                    <Tab><h4>Location View</h4></Tab>
                </TabList>
                <TabPanel>
                    <ClaimDetails
                        claimID={location.state.claimID}
                        reportedDate={location.state.reportedDate}
                        icNum={location.state.icNum}
                        status={location.state.status}
                        score={location.state.score}
                        description={location.state.description}
                        firstName={location.state.firstName}
                        lastName={location.state.lastName}
                        phoneNum={location.state.phoneNum}
                        value={location.state.value}
                        policeNum={location.state.policeNum}
                    >
                    </ClaimDetails>
                </TabPanel>
                <TabPanel>
                    <div className="graph">
                        <NodeGraphExpand
                            claimID={location.state.claimID} /></div>
                </TabPanel>
                <TabPanel>
                    <LocationView
                        claimID={location.state.claimID} />
                </TabPanel>
            </Tabs>
        </span>
    </div>
)
    }




// const OpenClaim = () => {


//     return (


//     )

// }

export default graphql(getClaimsQuery)(OpenClaim);


