const express = require('express')
const router = express.Router();



const neo4j = require('node-neo4j');
const db = new neo4j('http://neo4j:test@neo4j:7474');

router.get('/load', function (req, res, next) {
    db.insertNode({
        name: 'Darth Vader #' + parseInt(Math.random() * 100),
        sex: 'male'
    }, ['Member'], function (err, node) {
        if (err) return next(err);

        res.json(node);
    });
});

router.get('/drop', function (req, res, next) {
    db.cypherQuery("MATCH (n) DETACH DELETE n", function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});


module.exports = router;
