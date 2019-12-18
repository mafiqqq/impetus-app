import React,{ Component, useEffect, useState } from 'react';
import feat1 from "./Nodes.png";
import feat2 from "./feat2.jpg";
import feat3 from "./feat3.png";
import feat4 from "./feat4.png";
import Status from "./Status5.png";

import "../Home/Home.css";

import { Link } from "react-router-dom";
import { withApollo } from 'react-apollo';
import Search from "../Search.js";

import Tabs from "../Tabs";
// import { frob } from "gl-matrix/src/gl-matrix/mat2";
import gql from 'graphql-tag';
import { filter } from "graphql-anywhere";
require("../tabs.css");
require("../search.css");



const Home = () => {

    const [searchClaim, setSearchClaim] = useState("")
    const [searchPerson, setSearchPerson] = useState("")
    const [searchVehicle, setSearchVehicle] = useState("")
    const [searchAccident, setSearchAccident] = useState("")


    const handleSubmit = (evt) => {
      evt.preventDefault();
    }
    return (


        <div className='content1'>
            <Search/>
            
            <div className="mis">
            {/* <h1>...</h1> */}
            </div>
            <div className="claimDescription">
            <div className="statusImagediv">
            <img className='statusImage'src={Status}  alt='hi'/>
            

            </div> 
            <div className="intro">
            <div className="featureDiv">
               
            <table className='feature2'>

                         <div className="feat3">
                         <tr><img className='feat' src={feat3}  alt='hi'/></tr>
                         <tr> < h6 className='description'>Claims Management</h6>
                         <hr></hr>

                         <p className='description'>Display all the claims with their details </p></tr>
                         </div>
            <div className="feat2">
            <tr> <img className='feat'src={feat2}  alt='hi'/></tr>
                            <tr>< h6 className='description'>Suspicious Claims Alert</h6>
                            <hr></hr>
                            <p className='description'>Helps to identify which claims need further investigation</p></tr>
                         </div>
            
            <div className="feat4">
                         <tr> <img className='feat' src={feat4}  alt='hi'/></tr>
                         <tr> < h6 className='description'>Cases Management</h6>
                         <hr></hr>

                         <p className='description'>Create cases for alerts that need further investigation</p></tr>
                         </div>
<div className="feat1">

            <tr> 
                < img className='feat' src={feat1} alt='hi'/>
                </tr>
                <tr>< h6 className='description'>Graphical Network Visualization</h6>
                <hr></hr>

                <p className='description'>Visualize connection between nodes easily</p></tr>
                </div>
                         </table> 
             </div>
            </div>
            </div>
            




        </div>

)
}



// const Home = () => {
//     return(

       
//          <div className='content'>
         
   
// <table className='feature'>

//             <tr> 
//                 <td>< img className='feat' src={feat1} alt='hi'/></td>
//                 <td>< h6 className='description'>Graphical Network Visualization</h6>
//                 <p className='description'>to visualize connection between nodes easily</p></td>

//                 <td><img className='feat'src={feat2}  alt='hi'/></td>
//                 <td>< h6 className='description'>Suspicious Claims Alert</h6>
//                 <p className='description'>Helps to identify which claims need further investigation</p></td>

//              </tr>
//              <tr> 
//              <td><img className='feat' src={feat3}  alt='hi'/></td>
//              <td> < h6 className='description'>Claims Management</h6>
//              <p className='description'>Display all the claims with their details and with sorting feature </p></td>


//              <td> <img className='feat' src={feat4}  alt='hi'/></td>
//              <td> < h6 className='description'>Cases Management</h6>
//              <p className='description'>Cases can be creates for alerts that need further investigation</p></td>

//              </tr>
//              </table>

        
           
//         </div>
        
//     )
// }

export default Home;