const express = require('express');

const port = 1337;
const app = express();
app.use(express.static('public'));


app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/templates/index.html');
});

app.get('/bios', (req, res) => {
    res.sendFile(__dirname + '/public/templates/bios.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/templates/contact.html');
});

app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/public/templates/gallery.html');
});


app.use(function(request, response){
	// write that the page cannot be found to the body of the page
    response.status(500);
	response.sendFile(__dirname + '/public/templates/errors/404.html');
});

app.use(function(err, request, response, next){
	// output the error message
	console.error(err.stack);

	response.status(500);
	response.sendFile(__dirname + '/public/templates/errors/500.html');
});

app.listen(port, () => {
    console.log(`Listening... Go to http://localhost:${port}`);
});
