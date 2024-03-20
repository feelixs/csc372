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
        case '/index':
            serveStaticFile(response, '/public/index.html', 'text/html');
            break;
        case '/posts':
            serveStaticFile(response, '/public/posts.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(response, '/public/contact.html', 'text/html');
            break;
        case '/images/404bottom.gif':
            serveStaticFile(response, '/public/img/404bottom.gif', 'image/gif');
            break;
        case '/images/404mid.gif':
            serveStaticFile(response, '/public/img/404mid.gif', 'image/gif');
            break;
        case '/images/404top_w.jpg':
            serveStaticFile(response, '/public/img/404top_w.jpg', 'image/jpg');
            break;
        case '/images/blogging.png':
            serveStaticFile(response, '/public/img/blogging.png', 'image/png');
            break;
        case '/images/computer-typing.jpeg':
            serveStaticFile(response, '/public/img/computer-typing.jpeg', 'image/jpeg');
            break;
        case '/images/construction.png':
            serveStaticFile(response, '/public/img/construction.png', 'image/png');
            break;
        case '/images/logo.png':
            serveStaticFile(response, '/public/img/logo.png', 'image/png');
            break;
        case '/images/merch.png':
            serveStaticFile(response, '/public/img/merch.png', 'image/png');
            break;
        case '/images/x.png':
            serveStaticFile(response, '/public/img/x.png', 'image/png');
            break;
        case '/css/style.css':
            serveStaticFile(response, '/public/css/style.css', 'text/css');
            break;
        default:
            serveStaticFile(response, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);
