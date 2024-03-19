var body = "<h1>Michael Miele-Herndon</h1>\n" +
    "<p>I am a senior at URI majoring in Computer Science from the great state of New York. In my free time I enjoy reading, hiking, and playing video games.</p>" +
    "<h3>Favorite Movies & Books</h3>" +
    "<ol>" +
    "<li>Eragon (Inheritence) Trilogy</li>" +
    "<li>The Lord of the Rings Series</li>" +
    "<li>Star Wars Original Trilogy</li>" +
    "</ol>"

var http = require('http');
var port = 1337;

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    response.write(body);
    response.end();
}).listen(port);

console.log(`Listening... Go to http://localhost:${port}`);
