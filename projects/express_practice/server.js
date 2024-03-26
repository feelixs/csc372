const express = require('express');

const app = express();
const port = 1337;

app.use(express.static('static'));


app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(port, () => {
    console.log(`Listening... Go to http://localhost:${port}`);
});
