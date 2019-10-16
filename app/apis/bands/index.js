const express = require('express')
const router = express.Router();



const neo4j = require('node-neo4j');
const db = new neo4j('http://neo4j:test@neo4j:7474');

// Add a Member to a band
router.post('/:bandId/', function (req, res, next) {
    const bandId = req.params['bandId'];
    const memberId = req.body['member'];

    db.cypherQuery(`
    merge (b:Band{id:${bandId}}) on create set b.id=${bandId} 
    merge (m:Member{id:${memberId}}) on create set m.id=${memberId}
    MERGE (m)-[:playsWith]->(b)  RETURN m,b`, function (err, result) {
        if (err) return next(err);
        res.json(result.data);

    })

})


router.delete('/:bandId/', function (req, res, next) {
    const bandId = req.params['bandId'];
    const query = `MATCH ( b:Band{id: ${bandId}} ) DETACH DELETE b`;

    db.cypherQuery(query, function (err, result) {
        if (err) return next(err);
        res.json(result.data);

    })
})

router.get('/:bandId/members',function(req, res, next){
    const bandId = req.params['bandId'];

    db.cypherQuery(`MATCH (m:Member)-[:playsWith]->(b:Band{id:${bandId}}) RETURN m`,function (err,result) {
        if (err) return next(err);
        res.json(result.data);
    } )

})
module.exports = router;
