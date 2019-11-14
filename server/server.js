const env = require('./envValidator');
const express = require('express');
const app = express();
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver('bolt://0.0.0.0:17474', neo4j.auth.basic('neo4j', 'password'));

const session = driver.session();


const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => {

    //
    // const personId = 1
    // try {
    //     session.run(`create (p: Person{id : ${personId}) return p`,)
    //         .then(function (result) {
    //         res.send(result);
    //
    //     })
    // } catch (e) {
    //     console.log(e);
    // }


    const neo4j = require('node-neo4j');
    const  db = new neo4j('http://localhost:password@neo4j:17474');
    db.insertNode({
        name: 'Darth Vader #' + parseInt( '100'),
        sex: 'male'
    }, ['Person'], function (err, node) {
        if (err)
        {
            console.error(err)
        }

        console.log(node);
    });

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
