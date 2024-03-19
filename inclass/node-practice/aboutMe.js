var http = require('http');
var fs = require('fs');


var index_body = "<h1>Michael Miele-Herndon</h1>\n" +
    "<p>I am a senior at URI majoring in Computer Science from the great state of New York. In my free time I enjoy reading, hiking, and playing video games.</p>" +
    "<h3>Favorite Movies & Books</h3>" +
    "<ol>" +
    "<li>Eragon (Inheritence) Trilogy</li>" +
    "<li>The Lord of the Rings Series</li>" +
    "<li>Star Wars Original Trilogy</li>" +
    "</ol>"

function serveStaticFile(response, path, contentType, status) {
    if (!status) {
        status = 200;
    }

    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            response.writeHead(500, {
                'Content-Type': 'text/html',
            });
            response.end("<h1>Internal Server Error</h1>");
        } else {
            response.writeHead(status, {
                'Content-Type': contentType,
            });
            response.end(data);
        }
    });
}

var routes = {
    "/": function index(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        });
        response.end(index_body);
    },
    "/about": function index(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        });
        response.end("<h1>About Us</h1>");
    },
    "/contact": function index(request, response) {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        });
        response.end("<h1>Contact Us</h1>");
    },
}

var port = 1337;
http.createServer((request, response) => {
    let path = request.url.replace('/\/?(?:\?.*)?$/', '');
    switch (path) {

    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);
