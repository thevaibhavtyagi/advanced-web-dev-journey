import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello! My first Node.js server is working!');
});

server.listen(3000, () => {
    console.log("Server running!");
});