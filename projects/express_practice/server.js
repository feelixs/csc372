const express = require('express');

const app = express();
const port = 1337;

app.use(express.static('static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/dolphin', function(req, res) {
    res.sendFile(__dirname + '/dolphin.html');
});

app.get('/unicorn', function(req, res) {
    res.sendFile(__dirname + '/unicorn.html');
});

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/404.html');
});

app.listen(port, () => {
    console.log(`Listening... Go to http://localhost:${port}`);
});
