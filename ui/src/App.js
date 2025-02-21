import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import cors from "cors";

//components
import AccidentList from "./component/AccidentList.js";
import MainBase from "./component/MainBase.js";
import Home from "./component/Home/Home.js";
import ClaimList from "./component/ClaimList.js";
import CaseList from "./component/CaseList.js";
import Search from "./component/Search.js";
import AlertList from "./component/AlertList.js";
import OpenClaim from "./component/OpenClaim.js";
import OpenAlert from "./component/OpenAlert.js";
import OpenCase from "./component/OpenCase.js";
import ClaimDetails from "./component/ClaimDetails.js";
import CaseDetails from "./component/CaseDetails.js";
import AlertDetails from "./component/AlertDetails";
import SearchResultsPerson from "./component/SearchResultsPerson.js";
import SearchResultsClaim from "./component/SearchResultsClaim.js";
import SearchResultsVehicle from "./component/SearchResultsVehicle.js";
import SearchResultsAccident from "./component/SearchResultsAccident.js";

import NodeGraph from "./component/NodeGraph.js";
// import GraphReact from "./component/GraphReact.js";
// import GraphSigma from "./component/GraphSigma.js";
// import AccidentMap from './component/AccidentMap.js';
// import LocationView from './component/LocationView.js';

// import AddPlayer from './component/AddPlayer.js';

//allow cross origin request
//  this.App.use(cors());

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: e => {
    console.log(e);
  }
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <div className="App">
              {/* <GraphReact /> */}
              {/* <NodeGraph /> */}
              {/* <LocationView /> */}
              {/* <GraphSigma />/ */}
              <MainBase />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ClaimList" component={ClaimList} />
                <Route path="/AlertList" component={AlertList} />
                <Route path="/CaseList" component={CaseList} />
                <Route path="/Search" component={Search} />
                <Route path="/OpenClaim" component={OpenClaim} />
                <Route path="/OpenClaim/:id" component={ClaimDetails} />
                <Route path="/OpenAlert" component={OpenAlert} />
                <Route path="/OpenAlert/:id" component={AlertDetails} />
                <Route path="/OpenCase" component={OpenCase} />
                <Route path="/OpenCase/:id" component={CaseDetails} />
                <Route
                  path="/SearchResultsPerson"
                  component={SearchResultsPerson}
                />
                <Route
                  path="/SearchResultsClaim"
                  component={SearchResultsClaim}
                />
                <Route
                  path="/SearchResultsVehicle"
                  component={SearchResultsVehicle}
                />
                <Route
                  path="/SearchResultsAccident"
                  component={SearchResultsAccident}
                />
              </Switch>
            </div>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
