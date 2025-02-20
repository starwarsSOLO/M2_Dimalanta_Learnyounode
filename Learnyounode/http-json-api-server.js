const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/api/parsetime' && query.iso) {
        const isoDate = new Date(query.iso);
        const responseObj = {
            hour: isoDate.getHours(),
            minute: isoDate.getMinutes(),
            second: isoDate.getSeconds()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseObj));
    } else if (pathname === '/api/unixtime' && query.iso) {
        const isoDate = new Date(query.iso);
        const responseObj = {
            unixtime: isoDate.getTime()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseObj));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});