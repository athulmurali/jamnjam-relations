const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing
app.use('/', express.static(__dirname + '/view'));

const toolsRouter = require('./apis/tools');
const membersRouter = require('./apis/members')
const bandsRouter = require('./apis/bands')

app.use('/tools', toolsRouter);
app.use('/members', membersRouter);
app.use('/bands', bandsRouter);


app.listen(3000, function () {
    console.log('started');
});
