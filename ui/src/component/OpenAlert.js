import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import AlertDetails from './AlertDetails.js';
import Workshop from './Workshop.js';
import LocationView from './LocationView.js';
import Dropdown from './AlertHamburgerB.js';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { graphql } from 'react-apollo';
import {getAlertsQuery } from '../queries/queries.js'; 
import "./openedAlert.css";
import NodeGraphExpand from './NodeGraphExpand.js';


function OpenAlert() {

    const location = useLocation();

    

    return (
        <div className="row">
            <div className="OpenedClaim">

                <button className="claimId">
                    <button className="openedClaimId"> {location.state.claimID}</button>
                    <Link to='/AlertList'>
                        <p class="x">X</p>
                    </Link></button>
            </div>
            <span className="tab">
                <Tabs>
                    <TabList>
                        <Dropdown 
                        claimID={location.state.claimID}
                        />
                        <Tab><h4>Alert Details</h4></Tab>
                        <Tab><h4>Workshop</h4></Tab>
                        <Tab><h4>Location View</h4></Tab>
                    </TabList>

                    <TabPanel>
                        <AlertDetails
                            claimID={location.state.claimID}
                            reportedDate={location.state.reportedDate}
                            icNum={location.state.icNum}
                            status={location.state.status}
                            description={location.state.description}
                            firstName={location.state.firstName}
                            lastName={location.state.lastName}
                            phoneNum={location.state.phoneNum}
                            value={location.state.value}
                            policeNum={location.state.policeNum}
                        >
                        </AlertDetails>
                    </TabPanel>
                    <TabPanel>
                    <div className="graph">
                        <NodeGraphExpand
                        claimID={location.state.claimID} />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <LocationView />
                    </TabPanel>
                </Tabs>
            </span>
        </div>
    )


}







export default graphql(getAlertsQuery)(OpenAlert);