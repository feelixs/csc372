const express = require('express');

const port = 1337;
const app = express();
app.use(express.static('static'));


const routes = {
    '/home': '/templates/index.html',
    '/bios': '/templates/bios.html',
    '/contact': '/templates/contact.html',
    '/gallery': '/templates/gallery.html',

    '/static/css/nav.css': '/static/css/nav.css',
    '/static/css/home.css': '/static/css/home.css',
    '/static/css/bios.css': '/static/css/bios.css',
    '/static/css/contact.css': '/static/css/contact.css',
    '/static/css/gallery.css': '/static/css/gallery.css',
    '/static/css/main.css': '/static/css/main.css',
    '/static/css/flex-boxes.css': '/static/css/flex-boxes.css',
    '/static/css/background.css': '/static/css/background.css',

    '/static/images/luna-logo.webp': '/static/images/luna-logo.webp',
    '/static/images/globe-white-es.webp': '/static/images/globe-white-es.webp',
    '/static/images/globe-white-en.webp': '/static/images/globe-white-en.webp',
    '/static/images/youtube-white.webp': '/static/images/youtube-white.webp',
    '/static/images/instagram-white.webp': '/static/images/instagram-white.webp',
    '/static/images/felix-logo-white.webp': '/static/images/felix-logo-white.webp',
    '/static/images/felix-logo-black.webp': '/static/images/felix-logo-black.webp',
    '/static/images/P1001211.webp': '/static/images/P1001211.webp',
    '/static/images/P1001446.webp': '/static/images/P1001446.webp',
    '/static/images/468D91AF.webp': '/static/images/468D91AF.webp',
    '/static/images/P1001384-cropped.webp': '/static/images/P1001384-cropped.webp',
    '/static/images/P1001197-cropped.webp': '/static/images/P1001197-cropped.webp',
    '/static/images/P1001427-cropped.webp': '/static/images/P1001427-cropped.webp',

    '/static/data/html/copyright/en.html': '/static/data/html/copyright/en.html',
    '/static/data/html/copyright/es.html': '/static/data/html/copyright/es.html',
    '/static/data/html/footer/en.html': '/static/data/html/footer/en.html',
    '/static/data/html/footer/es.html': '/static/data/html/footer/es.html',

    '/static/data/json/gallery.json': '/static/data/json/gallery.json',

    '/static/data/xml/home.xml': '/static/data/xml/home.xml',
    '/static/data/xml/contact.xml': '/static/data/xml/contact.xml',
    '/static/data/xml/bios.xml': '/static/data/xml/bios.xml',

    '/static/fonts/Pridi/Pridi-Light.ttf': '/static/fonts/Pridi/Pridi-Light.ttf',
    '/static/fonts/Rubik_Doodle_Shadow/RubikDoodleShadow-Regular.ttf': '/static/fonts/Rubik_Doodle_Shadow/RubikDoodleShadow-Regular.ttf',
    '/static/fonts/Outfit/Outfit-VariableFont_wght.ttf': '/static/fonts/Outfit/Outfit-VariableFont_wght.ttf',

    '/static/js/change-language.js': '/static/js/change-language.js',
    '/static/js/home.js': '/static/js/home.js',
    '/static/js/bios.js': '/static/js/bios.js',
    '/static/js/gallery.js': '/static/js/gallery.js',
    '/static/js/contact.js': '/static/js/contact.js',
};

for (const url in routes) {
    // create each entry in routes as an app endpoint
    // routes is a set of key value pairs where the value is the server filepath and key is the url
    app.get(url, (req, res) => {
        res.sendFile(__dirname + routes[url]);
    });
}

app.use(function(request, response){
	// write that the page cannot be found to the body of the page
    response.status(500);
	response.sendFile(__dirname + '/templates/errors/404.html');
});

app.use(function(err, request, response, next){
	// output the error message
	console.error(err.stack);

	response.status(500);
	response.sendFile(__dirname + '/templates/errors/500.html');
});

app.listen(port, () => {
    console.log(`Listening... Go to http://localhost:${port}`);
});
