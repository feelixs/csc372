var http = require('http');
var fs = require('fs');


var routes = {
    '/home': ['/templates/index.html', 'text/html'],
    '/bios': ['/templates/bios.html', 'text/html'],
    '/contact': ['/templates/contact.html', 'text/html'],
    '/gallery': ['/templates/gallery.html', 'text/html'],

    '/static/css/nav.css': ['/static/css/nav.css', 'text/css'],
    '/static/css/home.css': ['/static/css/home.css', 'text/css'],
    '/static/css/bios.css': ['/static/css/bios.css', 'text/css'],
    '/static/css/contact.css': ['/static/css/contact.css', 'text/css'],
    '/static/css/gallery.css': ['/static/css/gallery.css', 'text/css'],
    '/static/css/main.css': ['/static/css/main.css', 'text/css'],
    '/static/css/flex-boxes.css': ['/static/css/flex-boxes.css', 'text/css'],
    '/static/css/background.css': ['/static/css/background.css', 'text/css'],

    '/static/images/luna-logo.webp': ['/static/images/luna-logo.webp', 'image/webp'],
    '/static/images/globe-white-es.webp': ['/static/images/globe-white-es.webp', 'image/webp'],
    '/static/images/globe-white-en.webp': ['/static/images/globe-white-en.webp', 'image/webp'],
    '/static/images/youtube-white.webp': ['/static/images/youtube-white.webp', 'image/webp'],
    '/static/images/instagram-white.webp': ['/static/images/instagram-white.webp', 'image/webp'],
    '/static/images/felix-logo-white.webp': ['/static/images/felix-logo-white.webp', 'image/webp'],
    '/static/images/felix-logo-black.webp': ['/static/images/felix-logo-black.webp', 'image/webp'],
    '/static/images/P1001211.webp': ['/static/images/P1001211.webp', 'image/webp'],
    '/static/images/P1001446.webp': ['/static/images/P1001446.webp', 'image/webp'],
    '/static/images/468D91AF.webp': ['/static/images/468D91AF.webp', 'image/webp'],
    '/static/images/P1001384-cropped.webp': ['/static/images/P1001384-cropped.webp', 'image/webp'],
    '/static/images/P1001197-cropped.webp': ['/static/images/P1001197-cropped.webp', 'image/webp'],
    '/static/images/P1001427-cropped.webp': ['/static/images/P1001427-cropped.webp', 'image/webp'],

    '/static/data/html/copyright/en.html': ['/static/data/html/copyright/en.html', 'text/html'],
    '/static/data/html/copyright/es.html': ['/static/data/html/copyright/es.html', 'text/html'],
    '/static/data/html/footer/en.html': ['/static/data/html/footer/en.html', 'text/html'],
    '/static/data/html/footer/es.html': ['/static/data/html/footer/es.html', 'text/html'],

    '/static/data/json/gallery.json': ['/static/data/json/gallery.json', 'text/json'],

    '/static/data/xml/home.xml': ['/static/data/xml/home.xml', 'text/xml'],
    '/static/data/xml/contact.xml': ['/static/data/xml/contact.xml', 'text/xml'],
    '/static/data/xml/bios.xml': ['/static/data/xml/bios.xml', 'text/xml'],

    '/static/fonts/Pridi/Pridi-Light.ttf': ['/static/fonts/Pridi/Pridi-Light.ttf', 'application/x-font-ttf'],
    '/static/fonts/Rubik_Doodle_Shadow/RubikDoodleShadow-Regular.ttf': ['/static/fonts/Rubik_Doodle_Shadow/RubikDoodleShadow-Regular.ttf', 'application/x-font-ttf'],
    '/static/fonts/Outfit/Outfit-VariableFont_wght.ttf': ['/static/fonts/Outfit/Outfit-VariableFont_wght.ttf', 'application/x-font-ttf'],

    '/static/js/change-language.js': ['/static/js/change-language.js', 'application/javascript'],
    '/static/js/home.js': ['/static/js/home.js', 'application/javascript'],
    '/static/js/bios.js': ['/static/js/bios.js', 'application/javascript'],
    '/static/js/gallery.js': ['/static/js/gallery.js', 'application/javascript'],
    '/static/js/contact.js': ['/static/js/contact.js', 'application/javascript'],
};


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
    try {
        serveStaticFile(response, routes[path][0], routes[path][1]);
    } catch (error) {
        console.log(`404: ${path}`);
        serveStaticFile(response, '/templates/errors/404.html', 'text/html', 404);
    }
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);



