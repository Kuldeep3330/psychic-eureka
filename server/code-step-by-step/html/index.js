const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
    fs.readFile(`form.html`, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        console.log(req.url)
        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        } else if (req.url == '/submit') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // convert Buffer to string
            });

            req.on('end', () => {
                // You can parse the body if needed
                // console.log('Form data:', body);
                const parsedData = querystring.parse(body)
                console.log('Form data:', parsedData);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Form submitted successfully!');
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
        }
    });
}).listen(3000);
