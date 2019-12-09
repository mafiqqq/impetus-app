import React, { Component } from "react";
import { Sigma, RandomizeNodePositions, RelativeSize, NeoCypher } from "react-sigma";
import SigmaLoader from "../Sigma/Loader";
import NodeShapes from "../Sigma/NodeShapes";

class NodeGraphExpand extends Component {

    graphData;
    constructor(props) {
        super(props);

        this.state = {
            filterNeighbours: "",
            settings: {
                batchEdgesDrawing: true,
                drawEdges: true,
                drawLabels: true,
                drawEdgeLabels: true,
                hideEdgesOnMove: false,
                animationsTime: 3000,
                clone: false,
                doubleClickEnabled: true,
                mouseWheelEnabled: true,
                minNodeSize: 5,
                maxNodeSize: 10,
                minEdgeSize: 0.5,
                maxEdgeSize: 1,
                defaultNodeBorderColor: "#0000",
                defaultHoverLabelBGColor: "transparent",
                labelHoverColor: "transparent",
                defaultLabelSize: 111
            },
            style: {
                height: "100%",
                width: "100%"
            }
        };

        this.graphData = {
            nodes: [],
            edges: []
        };

        // Generate a random graph:

        this.graphData.nodes.push({
            id: "user",
            label: "Vasanth",
            x: 5,
            y: 8,
            size: 9,
            color: "#000000",
            borderColor: "#FF3333",
            type: "circle"
        });

        this.graphData.nodes.push({
            id: "device1",
            label: "Tablet",
            x: 1,
            y: 10,
            size: 8,
            color: "#000000",
            borderColor: "#FF3333",
            type: "circle"
        });

        this.graphData.nodes.push({
            id: "device2",
            label: "Ipad",
            x: 10,
            y: 10,
            size: 8,
            color: "#000000",
            borderColor: "#FF3333",
            type: "circle"
        });

        this.graphData.edges.push({
            id: "userEdge",
            source: "device2",
            target: "user",
            size: 3,
            color: "#ff0000",
            neighborsOf: "n" + ((Math.random() * 2) | 0),
            nodesBy: "n" + ((Math.random() * 2) | 0),
            type: "dotted"
        });

        this.graphData.edges.push({
            id: "userEdge2",
            source: "device1",
            target: "user",
            size: 3,
            color: "#ff0000",
            neighborsOf: "n" + ((Math.random() * 2) | 0),
            nodesBy: "n" + ((Math.random() * 2) | 0),
            type: "dotted"
        });

    }


    render() {
        // let myGraph = {
        //     nodes: [{ id: "n1", label: "Alice" }, { id: "n2", label: "Rabbit" }],
        //     edges: [{ id: "e1", source: "n1", target: "n2", label: "SEES" }]
        // };
        return (

            <div className="sigma-container" style={{ height: "1000px", width: "1750px" }}>
                {/* <Sigma 
            renderer="canvas" 
            style={this.state.settings}
            settings={this.state.style}
            >
            <SigmaLoader graph={this.graphData}>
                <NodeShapes default="circle" />
            </SigmaLoader>
            </Sigma> */}

                <Sigma
                renderer="canvas" 
                    settings={ this.state.style }
                    // style={this.state.settings}
                >
                    <NeoCypher
                        url="http://localhost:7474"
                        user="neo4j"
                        password="root"
                        query=
                        "MATCH (c:Claim {claimID:'6000'})-[r]-(a)-[d]-(e)-[g]-(h) RETURN c,r,a,d,e,g,h"
                        onGraphLoaded={() => console.log("Graph loaded")} >
                    </NeoCypher>
                    <RelativeSize initialSize={35} />
                    <RandomizeNodePositions />
                </Sigma>
            </div>





            // <Sigma graph={myGraph} settings={{drawEdges:true, clone:false}}>
            //     <RelativeSize initialSize={15} />
            //     <RandomizeNodePositions />
            // </Sigma>
        )
    }

}

// MyNeoGraphItemProducers {

//     node(node: Accident) : Accident {
//         return{
//             id: 'accidentID',
//             label: 'accidentID',
//             x: Math.random(),
//             y: Math.random(),
//             size: 
//             color: 
//         }
//     }
    
// }

export default NodeGraphExpand;