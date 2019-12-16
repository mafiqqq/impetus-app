import React, { Component, useEffect } from "react";
import  sigma  from "react-sigma";
// import Neo4jGraph from "neo4j-driver";
import { v1 as neo4j, Neo4jGraph } from "neo4j-driver";
import { Helmet } from "react-helmet";
// import {sigma} from "neosig";

const GraphSigma = () => {

    //var Neoconfig 
    var neo4jConfig = {
        url: 'bolt://localhost:11004',
        user: "neo4j",
        password: "root"
    };

    //Var style for each Node in Neo4j
    var style = {
        labels: {
            User: {
                label: 'name',
                color: '#654321',
                size: 10,
                icon: {
                    name: 'f007',
                    color: '#FFF',
                    scale: 1.0
                }
            },
            Business: {
                label: 'name',
                color: '#123456',
                size: 10,
                icon: {
                    name: 'f008',
                    color: '#FFF',
                    scale: 1.0
                }
            },
            Category: {
                label: 'name',
                color: '#924321',
                size: 10,
                icon: {
                    name: 'f009',
                    color: '#FFF',
                    scale: 1.0
                }
            },
            Review: {
                label: 'stars',
                color: '#254121',
                size: 10,
                icon: {
                    name: 'f010',
                    color: '#FFF',
                    scale: 1.0
                }
            }
        },
        edges: {
            IN_CATEGORY: {
                color: '#040404',
                size: 1,
                label: 'name'
            },
            REVIEWS: {
                color: '#040404',
                size: 1,
                label: 'stars'
            },
            WROTE: {
                color: '#040404',
                size: 1,
                label: 'name'
            }
        }
    };

    function display(){ 
        
    }

    // useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src = "https://cdn.jsdelivr.net/npm/neo4j-driver@1.6.0";
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);

    //   useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src = "https://rawgit.com/sim51/neosig/master/docs/neosig.bundle-1.2.1.js";
    //     script.async = true;

    //     document.body.appendChild(script);

    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);


    return (
        <div id="sigma-container">
            {
        // query = "MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 10"
        function Neo4jGraph(neo4jConfig, style, 'MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 10', {}).then(function (result) {
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

            s.graph.read(result);
            sigma.plugins.dragNodes(s, s.renderers[0]);
            s.startForceAtlas2();
            setTimeout(() => { s.stopForceAtlas2() }, Math.log(result.nodes.length * result.edges.length) * 1000);

        })
    }
        </div>
    )
}

export default GraphSigma;