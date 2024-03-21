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
        case '/home':
            serveStaticFile(response, '/templates/index.html', 'text/html');
            break;
        case '/bios':
            serveStaticFile(response, '/templates/bios.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(response, '/templates/contact.html', 'text/html');
            break;
        case '/gallery':
            serveStaticFile(response, '/templates/gallery.html', 'text/html');
            break;
        default:
            console.log("trying to server static file: " + path);
            if (path.startsWith('/static') && path.endsWith('.css')) {
                serveStaticFile(response, path, 'text/css');
            } else if (path.startsWith('/static') && path.endsWith('.webp')) {
                serveStaticFile(response, path, 'image/webp');
            } else if (path.startsWith('/static') && path.endsWith('.png')) {
                serveStaticFile(response, path, 'image/png');
            } else if (path.startsWith('/static') && path.endsWith('.js')) {
                serveStaticFile(response, path, 'application/javascript');
            } else if (path.startsWith('/static/data/html')) {
                serveStaticFile(response, path, 'text/html');
            } else if (path.startsWith('/static/data/json')) {
                serveStaticFile(response, path, 'text/json');
            }
            
            console.log(`404: ${path}`);
            serveStaticFile(response, '/templates/errors/404.html', 'text/html', 404);
            break;
    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);



