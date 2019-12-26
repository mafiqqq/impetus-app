import React, { Component, useState } from "react";
import { Button, Popup } from 'semantic-ui-react'
import { Sigma, NOverlap, EdgeShapes, RandomizeNodePositions, RelativeSize, NeoCypher, ForceAtlas2 } from "react-sigma";
import SigmaLoader from "../Sigma/Loader";
import feat1 from "./legend.png";
// import '../sigma/plugins.dragNodes';
import DragNodes from "./DragNodes";
// import 'react-sigma/sigma/sigma.plugins.dragNodes'
import NodeShapes from "../Sigma/NodeShapes";
import { NodeGraphProducers } from "./NodeGraphProducers.js";
import { canNotDefineSchemaWithinExtensionMessage } from "graphql/validation/rules/LoneSchemaDefinition";
import NeoGraphItemsProducers from "react-sigma/lib/NeoGraphItemsProducers";
import { relative } from "path";

const datas = {

    node(node: NeoNodes): SigmaNodes {
        if (node.labels == "Claim") {
            return {
                id: node.id,
                label: node.properties.claimID,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#0256C3",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        } else if (node.labels == "Accident") {
            return {
                id: node.id,
                label: node.properties.accidentDate,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#008E39",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        } else if (node.labels == "Person") {
            return {
                id: node.id,
                label: node.properties.firstName,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#FBAF00",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        } else if (node.labels == "Vehicle") {
            return {
                id: node.id,
                label: node.properties.plateNumber,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#F8FF00",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        } else if (node.labels == "Garage") {
            return {
                id: node.id,
                label: node.properties.garageName,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#7A0082",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        } else if (node.labels == "Healthcare") {
            return {
                id: node.id,
                label: node.properties.healthcareName,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#00FFE6",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        } else if (node.labels == "Lawfirm") {
            return {
                id: node.id,
                label: node.properties.lawfirmName,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#8AFF00",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        } else if (node.labels == "Case") {
            return {
                id: node.id,
                label: node.properties.caseID,
                x: Math.random(),
                y: Math.random(),
                size: 30,
                color: "#F895FE",
                neo4j_label: node.labels,
                neo4j_data: node.properties
            }
        }
    },


    edge(edge: edge): edges {
        // console.log("Got from Neo4j edges");
        // console.log(edge);
        if (edge.type == 'BASED_ON') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "black",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'MADE_A') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "sandybrown",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'INVOLVED_IN') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "teal",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'REPAIRED_IN') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "black",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'HEALED_IN') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "black",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'LAWYER_OF') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "black",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'DRIVER_OF') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "magenta",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'PASSENGER_OF') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "firebrick",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'WITNESS_OF') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "mediumspringgreen",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        } else if (edge.type == 'CREATED_A') {
            return {
                id: edge.id,
                label: edge.type,
                source: edge.startNode,
                target: edge.endNode,
                color: "black",
                neo4j_type: edge.type,
                neo4j_data: edge.properties
            }
        }
    }
};

const NodeGraphExpand = props => {

    const sigmaContainerStyle = {
        height: "450px",
        width: "1550px",


    };
    const legend = {
        width: '250px',
        height: '200px',
        position: 'absolute',
        margin: '60px 0 0 1100px',
        backgroundColor: 'white',
        display: 'right'
      }

    const [nodeOpen, setNodeOpen] = useState("Click on a node to display its details")
    const [nodeGraphExpandState, setNodeGraphExpandState] = useState(props)
    var claimID = nodeGraphExpandState.claimID;
    var query = "MATCH (c:Claim {claimID: " + "'" + claimID + "'" + "})-[r]-(a)-[d]-(e)-[g]-(h) RETURN c,r,a,d,e,g,h"
    // "MATCH (c:Claim {claimID:'6000'})-[r]-(a)-[d]-(e)-[g]-(h) RETURN c,r,a,d,e,g,h"
    return (

        <div className="sigma-container" style={sigmaContainerStyle}>
        
        
            <Popup open basic wide='very' content={nodeOpen}
                trigger={ <div style={sigmaContainerStyle} ><img className='legend' src={feat1} style={legend} alt="hi"/>
                <Sigma
                    renderer="svg"
                    settings={
                        { batchEdgesDrawing: true },
            {drawEdges: true},
                    {drawLabels: false},
                    {drawNodes: true},
                    {drawEdgeLabels: true},
                    {animationsTime: 100},
                    {clone: false},
                    {doubleClickEnabled: true},
                    {mouseWheelEnabled: true},
                    {minNodeSize: 5},
                    {maxNodeSize: 10},
                    {minEdgeSize: 25},
                    {maxEdgeSize: 50},
                    {labelHoverColor: "red"},
                    {defaultLabelSize:15},
                    {defaultEdgeSize: 30}
                    
                }
                style={
                { width: "100%" },
            {height: "100%"}
                }
                onClickNode={e => {
                    console.log(e.data.node.neo4j_data);
                    
                    if (e.data.node.neo4j_label == "Vehicle"){
                        var model = "Vehicle Model: "+e.data.node.neo4j_data.model
                        var chasis = "Chasis Number: "+e.data.node.neo4j_data.vin
                        var plateNumber = "Plate Number: "+e.data.node.neo4j_data.plateNumber

                        setNodeOpen(()=>(model+", "+chasis+", "+plateNumber))
                        
                        
                    }
                    if (e.data.node.neo4j_label == "Person"){
                        var name= "Name: "+e.data.node.neo4j_data.firstName+" "+ e.data.node.neo4j_data.lastName
                       var ic= "IC Number: "+e.data.node.neo4j_data.icNum
                    setNodeOpen(()=>(name+", "+ic))               
                    }
                    if (e.data.node.neo4j_label == "Claim"){
                        var claimID= "Claim Id: "+e.data.node.neo4j_data.claimID
                       var value= "Value: "+e.data.node.neo4j_data.value
                       var status= "Status: "+e.data.node.neo4j_data.status
                       var score= "Score: RM"+e.data.node.neo4j_data.score    
                       var reportedDate= "Reported Date: "+e.data.node.neo4j_data.reportedDate                           
                       
                    setNodeOpen(()=>(claimID+", "+value+", "+status+", "+score+", "+reportedDate))               

                    }

                    if (e.data.node.neo4j_label == "Accident"){
                        var date= "Accident Date: "+e.data.node.neo4j_data.accidentDate
                        var time= "Time Date: "+e.data.node.neo4j_data.accidentTime                            
                        var address= "Address: "+e.data.node.neo4j_data.city+" "+ e.data.node.neo4j_data.street
                        
                        setNodeOpen(()=>(date+", "+time+", "+address))               
                    }
                    if (e.data.node.neo4j_label == "Garage"){
                        var name= "Garage Name: "+e.data.node.neo4j_data.garageName
                        var address= " Address: "+e.data.node.neo4j_data.city+" "+ e.data.node.neo4j_data.street+ ", State: "+ e.data.node.neo4j_data.state

                        setNodeOpen(()=>(name+", "+address))               
                    }
                    if (e.data.node.neo4j_label == "Lawfirm"){
                        var name= "Lawfirm Name: "+e.data.node.neo4j_data.lawfirmName
                        var address= " Address: "+e.data.node.neo4j_data.city+" "+ e.data.node.neo4j_data.street+ ", State: "+ e.data.node.neo4j_data.state
                        
                        setNodeOpen(()=>(name+", "+address))               
                    }
                    if (e.data.node.neo4j_label == "Healthcare"){
                        var name= "Healthcare Service Name: "+e.data.node.neo4j_data.lawfirmName
                        var address= " Address: "+e.data.node.neo4j_data.city+" "+ e.data.node.neo4j_data.street+ ", State: "+ e.data.node.neo4j_data.state
                        
                        setNodeOpen(()=>(name+", "+address))               
                    }
                    // console.log(e.data.node);
                    // setNodeOpen( () => e.data.node.neo4j_data)
                }}
            >
                    <EdgeShapes default="line" />
            <NOverlap nodeMargin={5} gridSize={10} maxIterations={100} />
            <NeoCypher
                url="http://localhost:7474"
                user="neo4j"
                password="root"
                query={query}
                producers={datas}
                onGraphLoaded={() => console.log("Graph loaded")} >
                <ForceAtlas2 worker barnesHutOptimize linLogMode
                    barnesHutTheta={0.6}
                    iterationsPerRender={10}
                    timeout={3000} />
                <DragNodes />
            </NeoCypher>
            <RelativeSize initialSize={35} />
            <RandomizeNodePositions />
            </Sigma>
            </div>} >
      </Popup >
            </div >

        )
    }

export default NodeGraphExpand;