var index_body = "<h1>Michael Miele-Herndon</h1>\n" +
    "<p>I am a senior at URI majoring in Computer Science from the great state of New York. In my free time I enjoy reading, hiking, and playing video games.</p>" +
    "<h3>Favorite Movies & Books</h3>" +
    "<ol>" +
    "<li>Eragon (Inheritence) Trilogy</li>" +
    "<li>The Lord of the Rings Series</li>" +
    "<li>Star Wars Original Trilogy</li>" +
    "</ol>"


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

var http = require('http');
var port = 1337;
http.createServer((request, response) => {
    if (request.url in routes) {
        return routes[request.url](request, response);
    } else {
        response.end("<h1>404 Not Found</h1>");
    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);
