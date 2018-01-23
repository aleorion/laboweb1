const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT || 8081));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/maps.html')); 
});

app.listen(app.get('port'), function() {
    console.log("Running on port " + app.get('port'));
});