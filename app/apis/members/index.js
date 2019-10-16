const express = require('express')
const router = express.Router();



const neo4j = require('node-neo4j');
const db = new neo4j('http://neo4j:test@neo4j:7474');



// Get the list of bands that the artist plays with
router.get('/:memberId/bands',function(req, res, next){
    const memberId = req.params['memberId'];

    db.cypherQuery(`MATCH (m:Member{id:${memberId}})-[:playsWith]->(b:Band) RETURN b`,function (err,result) {
        if (err) return next(err);
        res.json(result.data);

    } )

})

router.delete('/:memberId',function(req,res,next){
    const memberId = req.params['memberId'];
    const query  = `MATCH ( m:Member{id: ${memberId}} ) DETACH DELETE m`;

    db.cypherQuery(query,function (err,result) {
        if (err) return next(err);
        res.json(result.data);

    } )
})



module.exports = router;




