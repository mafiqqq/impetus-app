import React, { Component } from "react";
import { Sigma, RandomizeNodePositions, RelativeSize, NeoCypher } from "react-sigma";

export class NodeGraphProducers {

  node(node: Node): nodes {
    return {
      id: toString(node.Accident.accidentID),
      label: "HI",
      x: Math.random(),
      y: Math.random(),
      size: 10,
      color: "#5DA5DA",
      neo4j_label: node.Accident.labels,
      neo4j_data: node.Accident.properties
    }
    return {
      id: toString(node.Claim.properties.claimID),
      label: toString(node.Claim.properties.claimID),
      x: Math.random(),
      y: Math.random(),
      size: 10,
      color: "#E3340F", 
      neo4j_label: node.Claim.labels,
      neo4j_data: node.Claim.properties
    }
  }
  
    // node(Claim) : claims {
    // return {
    //   id: toString(Claim.properties.claimID),
    //   label: toString(Claim.properties.claimID),
    //   x: Math.random(),
    //   y: Math.random(),
    //   size: 10,
    //   color: "#E3340F", 
    //   neo4j_label: Claim.labels,
    //   neo4j_data: Claim.properties
    // }
  // }

  // node(node: Person): PersonS {
  //   return {
  //     id: "node.personID",
  //     label: node.firstName,
  //     x: Math.random(),
  //     y: Math.random(),
  //     size: 10,
  //     color: "#5DA5DA",
  //     neo4j_label: node.labels,
  //     neo4j_data: node.properties
  //   }
  // }

  // node(node: Vehicle): VehicleS {
  //   return {
  //     id: node.vehicleID,
  //     label: node.plateNumber,
  //     x: Math.random(),
  //     y: Math.random(),
  //     size: 10,
  //     color: "#5DA5DA",
  //     neo4j_label: node.labels,
  //     neo4j_data: node.properties
  //   }
  // }

  // node(node: Garage): GarageS {
  //   return {
  //     id: node.garageID,
  //     label: node.garageName,
  //     x: Math.random(),
  //     y: Math.random(),
  //     size: 10,
  //     color: "#5DA5DA",
  //     neo4j_label: node.labels,
  //     neo4j_data: node.properties
  //   }
  // }

  // node(node: Lawfirm): LawfirmS {
  //   return {
  //     id: node.lawfirmID,
  //     label: node.lawfirmName,
  //     x: Math.random(),
  //     y: Math.random(),
  //     size: 10,
  //     color: "#5DA5DA",
  //     neo4j_label: node.labels,
  //     neo4j_data: node.properties
  //   }
  // }

  // node(node: Healthcare): HealthcareS {
  //   return {
  //     id: Healthcare.healthcareID,
  //     label: Healthcare.healthcareName,
  //     x: Math.random(),
  //     y: Math.random(),
  //     size: 10,
  //     color: "#5DA5DA",
  //     neo4j_label: Healthcare.labels,
  //     neo4j_data: Healthcare.properties
  //   }
  // }

  // node(node: Case): CaseS {
  //   return {
  //     id: node.caseID,
  //     label: node.caseID,
  //     x: Math.random(),
  //     y: Math.random(),
  //     size: 10,
  //     color: "#5DA5DA",
  //     neo4j_label: node.labels,
  //     neo4j_data: node.properties
  //   }
  // }

  // edge(edge: MADE_A): MADE_AS {
  //   return {
  //     id: '',
  //     label: '',
  //     source: edge.Person,
  //     target: edge.Claim,
  //     color: "#333333",
  //     neo4j_type: edge.type,
  //     neo4j_data: edge.properties
  //   }
  // }

  edge(BASED_ON) : edges {
    return {
      id: '',
      label: '',
      source: BASED_ON.startNode,
      target: BASED_ON.endNode,
      color: "#333333",
      neo4j_type: BASED_ON.type,
      neo4j_data: BASED_ON.properties
    }
  }

}
