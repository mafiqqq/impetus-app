import React, { Component, useState } from "react";
import { Sigma, NOverlap, EdgeShapes, RandomizeNodePositions, RelativeSize, NeoCypher, ForceAtlas2 } from "react-sigma";
import SigmaLoader from "../Sigma/Loader";
// import '../sigma/plugins.dragNodes';
import DragNodes from "./DragNodes";        
// import 'react-sigma/sigma/sigma.plugins.dragNodes'
import NodeShapes from "../Sigma/NodeShapes";
import { NodeGraphProducers } from "./NodeGraphProducers.js";
import { canNotDefineSchemaWithinExtensionMessage } from "graphql/validation/rules/LoneSchemaDefinition";
import NeoGraphItemsProducers from "react-sigma/lib/NeoGraphItemsProducers";


const datas = {

    node(node: NeoNodes): SigmaNodes {
        console.log(node)
        if (node.labels == "Claim") {
            return {
                id: node.id,
                label: node.properties.claimID,
                x: Math.random(),
                y: Math.random(),
                size: 10,
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
                size: 10,
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
                size: 10,
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
                size: 10,
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
                size: 10,
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
                size: 10,
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
                size: 10,
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
                size: 10,
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
        } else if (edge.type == 'CREATED_A'){
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

const NodeGraph = props => {

    const [nodeGraphState, setNodeGraphState] = useState(props)
    var claimID = nodeGraphState.claimID;
    // var query3 = '"MATCH (c:Claim {claimID:"'+claimID+'"})-[r:BASED_ON]->(a:Accident) RETURN c,r,a })"' 
    // MATCH (p:Person)-[:MADE_A]->(c:Claim {claimID:"6000"})-[:BASED_ON]->(a:Accident)<-[:INVOLVED_IN]-(v:Vehicle) RETURN p,c,a,v
    var query = "MATCH (p:Person)-[s:MADE_A]->(c:Claim {claimID: "+ "'" + claimID +"'"+"})-[r:BASED_ON]->(a:Accident)<-[t:INVOLVED_IN]-(v:Vehicle) RETURN c,r,a,v,s,t"
    // var queryS = query3.toString();
    // console.log(query2)
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         filterNeighbours: "",
    //         settings: {
    //             batchEdgesDrawing: true,
    //             drawEdges: true,
    //             drawLabels: true,
    //             drawEdgeLabels: true,
    //             hideEdgesOnMove: false,
    //             animationsTime: 200,
    //             clone: false,
    //             doubleClickEnabled: true,
    //             mouseWheelEnabled: true,
    //             minNodeSize: 5,
    //             maxNodeSize: 10,
    //             minEdgeSize: 0.5,
    //             maxEdgeSize: 1,
    //             defaultNodeBorderColor: "#0000",
    //             defaultHoverLabelBGColor: "transparent",
    //             labelHoverColor: "transparent",
    //             defaultLabelSize: 15
    //         },
    //         style: {
    //             height: "100%",
    //             width: "100%"
    //         }
    //     };
    // }

    // componentDidMount(){
    //     const s = this.props.sigma;
    //     if (s) {
    //         console.log(s, s.renderers, sigma.renderers);
    //         const dragListener = new sigma.plugins.dragNodes(s, s.renderers[0])
    //     }
    // }

    // componentWillUnmount(){
    //     if (this.props.sigma) {
    //         sigma.plugins.killDragNodes(this.props.sigma);
    //     }
    // }


        return (
        
            <div className="sigma-container" style={{ height: "100%", width: "100%" }}>
                {/* {console.log(query2)}         */}
                <Sigma
                    renderer="svg"
                    settings={
                        {batchEdgesDrawing:true},
                        {drawEdges:true},
                        {drawLabels:false},
                        {drawNodes: true},
                        {drawEdgeLabels:true},
                        {animationsTime: 100},
                        {clone: false},
                        {doubleClickEnabled: true},
                        {mouseWheelEnabled: true},
                        {minNodeSize: 5},
                        {maxNodeSize: 10},
                        {minEdgeSize: 3},
                        {maxEdgeSize: 5},
                        {labelHoverColor: "red"},
                        {defaultLabelSize:15}
                        
                    }
                    style={
                        {width:"100%"},
                        {height:"100%"}
                    }
                    onClickNode={() => console.log("Node clicked")}
                >
                    <EdgeShapes default="line"/>
                    <NOverlap nodeMargin={5} gridSize={10} maxIterations={100}/>
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
                    <RelativeSize initialSize={15} />
                    <RandomizeNodePositions />
                </Sigma>
            </div>
        )

}

export default NodeGraph;