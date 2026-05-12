//UNDERSTANDING req, res and ROUTING --------------

import http from 'http';

const server = http.createServer((req, res) => {

    console.log(`Someone visited: ${req.url} using ${req.method}`);

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to the Home Page!</h1>');

    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Typr': 'text/plain'});
        res.end('This is about page!');

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found!');
    }
});

server.listen(3000, () => {
    console.log("Server running!");
});