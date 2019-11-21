import React, { Component } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

//components
import AccidentList from './component/AccidentList.js';
import MainBase from './component/MainBase.js';
import Home from './component/Home/Home.js';
import ClaimList from './component/ClaimList.js';
import CaseList from './component/CaseList.js';
import Search from './component/Search.js';
import AlertList from './component/AlertList.js';
import OpenClaim from './component/OpenClaim.js';
import ClaimDetails from './component/ClaimDetails.js';
// import NodeGraph from './component/NodeGraph.js';
// import AccidentMap from './component/AccidentMap.js';
// import LocationView from './component/LocationView.js';

// import AddPlayer from './component/AddPlayer.js';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>

       
        <Router>
        <div className="App">
    
        {/* <LocationView /> */}
        <MainBase />
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/ClaimList'component={ClaimList}/>
        <Route path='/AlertList'component={AlertList}/>
        <Route path='/CaseList'component={CaseList}/>
        <Route path='/Search'component={Search}/>
        <Route path='/OpenClaim'component={OpenClaim}/>
        <Route path="/OpenClaim/:id" component={ClaimDetails}/>
        </Switch>
        </div>

        </Router>
      </ApolloProvider>
    )
  }
}

export default App;
