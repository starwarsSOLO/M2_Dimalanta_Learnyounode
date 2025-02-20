const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(body.toUpperCase());
        });

        req.on('error', (err) => {
            res.statusCode = 500;
            res.end(`Error: ${err.message}`);
        });
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});