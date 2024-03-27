const express = require('express');
const app = express();
const port = 1337;

app.use(function(request, response){
	// tell the browser that the data is in plaintext
	response.type('text/html');

	// tell the browser the route cannot be found
	response.status(404);

	// write that the page cannot be found to the body of the page
	response.sendFile(__dirname + '/public/404.html');
});

app.use(function(err, request, response, next){
	// output the error message
	console.error(err.stack);

	// tell the browser that the data is in plaintext
	response.type('text/html');

	// tell the browser that there was an internal server error
	response.status(500);

	// write there was an internal server error to body of the page
	response.sendFile(__dirname + '/public/500.html');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
