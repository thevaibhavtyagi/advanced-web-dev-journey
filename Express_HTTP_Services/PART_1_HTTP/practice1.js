// PRACTICE QUESTION 1 ------------------

import http from 'http';

const server = http.createServer((req, res) => {

    console.log(req.url, req.method);
    if(req.url === '/') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome Home!</h1>');

    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h2><a href="mailto:hello@mysite.com">hello@mysite.com</a></h2>');
        
    } else if(req.url === '/json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({"name": "Arjun", "city": "Punjab"}, null, 2));
        
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Running at http://localhost:3000');
});