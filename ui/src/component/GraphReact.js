import React from "react";
import { Graph } from "react-d3-graph";
import { InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';
import { updateClaimMutation } from "../queries/queries";



const GraphReact = () => {

    //   var nodes :[{
    //         id: 'first-node',
    //         label: 'First Node'
    //     },
    // {
    //     id: 'second-node',
    //     label: 'Second node'
    // }]

    // var links : [{
    //     source: 'first-node',
    //     target: 'second-node'
    // }]
    //     return(
    //         <InteractiveForceGraph
    //         simulationOptions={{ height: 300, width: 300 }}
    //         labelAttr="label"
    //         onSelectNode={(node) => console.log(node)}
    //         highlightDependencies
    //       >
    //         <ForceGraphNode node={nodes} fill="red" />
    //         <ForceGraphLink link={links} />
    //       </InteractiveForceGraph>
    //     )
    //     function display() {
    // graph payload (with minimalist structure)

    // const [data, setData] = useState();

    // const data = {
    //     nodes: [],
    //     links: []
    // }


    var jsonObj = {

        "nodes": [{
            "score": 300.0,
            "reportedDate": "19052017",
            "description": "Accident with another car",
            "label": "Claim",
            "claimID": "6000",
            "value": "8900",
            "status": "Settled"
        },
        {
            "lastName": "F. MARTIN",
            "firstName": "SOPHIE",
            "icNum": "890714025478",
            "personID": "154",
            "phoneNum": "104567865",
            "label": "Person",
            "state": "WPKL",
            "email": "sophiem@gmail.com"
        },
        {
            "accidentDate": "04/03/2017",
            "city": "Shah Alam",
            "street": "Jalan Akal 1/12A",
            "latitude": "3.08132",
            "postcode": "40450",
            "label": "Accident",
            "state": "Selangor",
            "policeNum": "TYF45AC45J",
            "accidentTime": "03:58:32 GMT+0800 (Malaysia Standard Time)",
            "longitude": "101.73696",
            "accidentID": "151"
        }],
        "links": [{
            "fromNode": 317,
            "toNode": 0
        },
        {
            "fromNode": 317,
            "toNode": 0
        }
        ]
    }

var w = 1200, h = 600;
var root = jsonObj;
console.log("root" + root);
root.fixed = true;
root.x = w / 2;
root.y = h / 2 - 80;
update();
console.log("Json obj" + jsonObj);

function update() {
    var nodes = root.nodes;
    var links = root.links;

    const data = {
        nodes: nodes,
        links: links
    }

    return data;
}









// const data = {
//     nodes: [
//         { id: "Harry" },
//         { id: "Sally" },
//         { id: "Alice" }],
//     links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }],
// };

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};


// return (
//     <Graph
//         id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
//         data={update()}
//         config={myConfig}
//     />
// )
    // }
}
export default GraphReact;