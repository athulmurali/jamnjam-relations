create =(bandId)=>{
    const query = `create (b: Band{id : ${bandId}) return b`;
}

// remove =()=>{
//
// }

addPersonToBand=(personId,bandId)=>{

    const   query = `match(p:Person{id: ${personId}}),( b:Band{id: ${bandId}}) merge (p)-[r:playsIn]->(b) return p,b`
}

removePersonFromBand=(personId,bandId )=>{
    const query =  `MATCH (p :Person{id : ${personId} })-[r:playsIn]->( b: Band{id: `${bandId}`}) DELETE r`
}

module.exports={addPersonToBand, removePersonFromBand}
