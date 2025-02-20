const http = require('http');

function getUrlData(url, callback) {
    let responseData = '';

    http.get(url, (response) => {
        response.setEncoding('utf8');

        response.on('data', (chunk) => {
            responseData += chunk;
        });

        response.on('end', () => {
            callback(responseData);
        });

        response.on('error', (err) => {
            console.error(`Error fetching ${url}: ${err.message}`);
        });
    });
}

const urls = process.argv.slice(2);

let results = [];
let count = 0;

function printResults() {
    results.forEach((result) => {
        console.log(result);
    });
}

urls.forEach((url, index) => {
    getUrlData(url, (data) => {
        results[index] = data;
        count++;

        if (count === urls.length) {
            printResults();
        }
    });
});