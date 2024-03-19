var http = require('http');

var port = 1337;
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'plain/text',
    });
    response.write('hello world');
    response.end();
}).listen(port);

console.log(`Listening.. Go to http://localhost:${port}`);
