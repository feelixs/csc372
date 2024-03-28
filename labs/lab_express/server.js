const express = require('express');
const app = express();
const port = 1337;

app.get('/', function(request, response) {
    response.type('text/plain');

    response.send('Rhody Travel');
});


app.get('/index', function(request, response) {
    response.type('text/plain');

    response.send('Rhody Travel');
});


app.get('/about', function(request, response) {
    response.type('text/plain');

    response.send('About Rhody Travel');
});


app.use(function(request, response){
	// tell the browser that the data is in plaintext
	response.type('text/plain');

	// tell the browser the route cannot be found
	response.status(404);

	// write that the page cannot be found to the body of the page
	response.send('Page not found');
});

app.use(function(err, request, response, next){
	// output the error message
	console.error(err.stack);

	// tell the browser that the data is in plaintext
	response.type('text/plain');

	// tell the browser the route cannot be found
	response.status(500);

	// write that the page cannot be found to the body of the page
	response.send('Internal Server Error');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
