var http = require('http');
var fs = require('fs');


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
        case '/home':
            serveStaticFile(response, '/public/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(response, '/public/about.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(response, '/public/contact.html', 'text/html');
            break;
        case '/img/logo.webp':
            serveStaticFile(response, '/public/img/luna-logo.webp', 'image/webp');
            break;
        default:
            serveStaticFile(response, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);
