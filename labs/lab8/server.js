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
            serveStaticFile(response, '/public/images/404bottom.gif', 'image/gif');
            break;
        case '/images/404mid.gif':
            serveStaticFile(response, '/public/images/404mid.gif', 'image/gif');
            break;
        case '/images/404top_w.jpg':
            serveStaticFile(response, '/public/images/404top_w.jpg', 'image/jpg');
            break;
        case '/images/blogging.png':
            serveStaticFile(response, '/public/images/blogging.png', 'image/png');
            break;
        case '/images/computer-typing.jpeg':
            serveStaticFile(response, '/public/images/computer-typing.jpeg', 'image/jpeg');
            break;
        case '/images/construction.png':
            serveStaticFile(response, '/public/images/construction.png', 'image/png');
            break;
        case '/images/logo.png':
            serveStaticFile(response, '/public/images/logo.png', 'image/png');
            break;
        case '/images/merch.png':
            serveStaticFile(response, '/public/images/merch.png', 'image/png');
            break;
        case '/images/x.png':
            serveStaticFile(response, '/public/images/x.png', 'image/png');
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
