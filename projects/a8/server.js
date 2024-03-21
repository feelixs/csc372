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
        case path.startsWith('/static') && path.endsWith('.css'):
            let cspath = `/static/css${path.substring(path.lastIndexOf("/"), path.length)}`;
            console.log(`loading css file: ${cspath}`);
            serveStaticFile(response, cspath, 'text/css');
            break;
        case path.startsWith('/static') && path.endsWith('.webp'):
            let webppath = `/static/images/webp${path.substring(path.lastIndexOf("/"), path.length)}`;
            console.log(`loading css file: ${webppath}`);
            serveStaticFile(response, webppath, 'image/webp');
            break;
        case path.startsWith('/static') && path.endsWith('.png'):
            let pngpath = `/static/images/webp${path.substring(path.lastIndexOf("/"), path.length)}`;
            console.log(`loading css file: ${pngpath}`);
            serveStaticFile(response, pngpath, 'image/png');
            break;
        case path.startsWith('/static') && path.endsWith('.js'):
            // /static/js/change-language.js
            let jspath = `/static/js${path.substring(path.lastIndexOf("/"), path.length)}`;
            console.log(`loading js file: ${jspath}`);
            serveStaticFile(response, jspath, 'text/javascript');
            break;
        case path.startsWith('/static/data/html'):
            console.log(`serving html api file: ${path}`);
            serveStaticFile(response, path, 'text/html');
            break;
        case path.startsWith('/static/data/json'):
            console.log(`serving json api file: ${path}`);
            serveStaticFile(response, path, 'text/json');
            break;
        default:
            console.log(`404: ${path}`);
            serveStaticFile(response, '/templates/errors/404.html', 'text/html', 404);
            break;
    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);
