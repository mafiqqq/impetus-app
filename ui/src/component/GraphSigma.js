import React, { Component } from "react";
import sigma from "neosig";

class GraphSigma extends Component{

    // displayGraphNode() {
        
    //     var s = new sigma(
    //         {
    //             renderer: {
    //                 container: document.getElementById('sigma-container'),
    //                 type: 'canvas'
    //             },
    //             settings: {
    //                 minEdgeSize: 0.1,
    //                 maxEdgeSize: 2,
    //                 minNodeSize: 1,
    //                 maxNodeSize: 8,
    //                 edgeLabelSize: 'proportional',
    //                 minArrowSize: 10
    //             }
    //         }
    //     );

    // //Var style for each Node in Neo4j
    // var style = {
    //     labels: {
    //         User : {
    //             label: 'name',
    //             color: '#654321',
    //             size: 10,
    //             icon: {
    //                 name: 'f007',
    //                 color: '#FFF',
    //                 scale:1.0
    //             }
    //         },
    //         Business : {
    //             label: 'name',
    //             color: '#123456',
    //             size: 10,
    //             icon: {
    //                 name: 'f008',
    //                 color: '#FFF',
    //                 scale:1.0
    //             }
    //         },
    //         Category : {
    //             label: 'name',
    //             color: '#924321',
    //             size: 10,
    //             icon: {
    //                 name: 'f009',
    //                 color: '#FFF',
    //                 scale:1.0
    //             }
    //         },
    //         Review : {
    //             label: 'stars',
    //             color: '#254121',
    //             size: 10,
    //             icon: {
    //                 name: 'f010',
    //                 color: '#FFF',
    //                 scale:1.0
    //             }
    //         }
    //     },
    //     edges : {
    //         IN_CATEGORY : {
    //             color: '#040404',
    //             size:1,
    //             label: 'name'
    //         },
    //         REVIEWS : {
    //             color: '#040404',
    //             size:1,
    //             label: 'stars'
    //         },
    //         WROTE : {
    //             color: '#040404',
    //             size:1,
    //             label: 'name'
    //         }
    //     }
    // };


    // //NeoSIgma 
    // Neo4jGraph(neoConfig, style, 'MATCH (n)-[r]->(m) RETURN n,r,m', {}).then(function(result){
    //     s.graph.read(result);
    //     sigma.plugins.dragNodes(s, s.renderers[0]);
    //     s.startForceAtlas2();
    //     setTimeout(() => {s.stopForceAtlas2()}, Math.log(result.nodes.length*result.edges.length)*1000);

    // })

    // }

    render(){
        return(
            <div id="sigma-container">
            
            var s = new sigma(
        {
            renderer: {
                container: document.getElementById('sigma-container'),
                type: 'canvas'
            },
            settings: {
                minEdgeSize: 0.1,
                maxEdgeSize: 2,
                minNodeSize: 1,
                maxNodeSize: 8,
                edgeLabelSize: 'proportional',
                minArrowSize: 10
            }
        } 
    );
            
            { this.displayGraphNode() }
            </div>
        )
    }

}

export default GraphSigma;