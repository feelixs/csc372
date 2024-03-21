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
        case '/static/images/webp/luna-logo.webp':
            serveStaticFile(response, '/static/images/webp/luna-logo.webp', 'image/webp');
            break;
        case '/static/images/webp/globe-white-es.webp':
            serveStaticFile(response, '/static/images/webp/globe-white-es.webp', 'image/webp');
            break;
        case '/static/images/webp/globe-white-en.webp':
            serveStaticFile(response, '/static/images/webp/globe-white-en.webp', 'image/webp');
            break;
        case '/static/images/webp/youtube-white.webp':
            serveStaticFile(response, '/static/images/webp/youtube-white.webp', 'image/webp');
            break;
        case '/static/images/webp/instagram-white.webp':
            serveStaticFile(response, '/static/images/webp/instagram-white.webp', 'image/webp');
            break;
        case '/static/images/webp/felix-logo-white.webp':
            serveStaticFile(response, '/static/images/webp/felix-logo-white.webp', 'image/webp');
            break;
        default:
            console.log(`404: ${path}`);
            serveStaticFile(response, '/templates/errors/404.html', 'text/html', 404);
            break;
    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);



