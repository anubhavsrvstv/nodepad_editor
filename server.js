var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

const port = '6003';

app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json({ limit: '1024mb' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

mongoose.connect('mongodb+srv://anubhav:1234567890@cluster0-7pma8.gcp.mongodb.net/notepadDetails?retryWrites=true&w=majority');
app.use(express.static('.'));
app.use('/api', require('./routes/routes.js'));


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('App is up at port ' + port + ' !');