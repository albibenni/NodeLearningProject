"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqHandler = void 0;
const fs_1 = require("fs");
const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST" >' +
            '<input type="text" name ="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end('Hello World\n');
    }
    if (url === '/message' && method === 'POST') {
        const body1 = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body1.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body1).toString();
            const message = parsedBody.split('=')[1];
            (0, fs_1.writeFile)('message.txt', message, (err) => {
                console.error(err);
            });
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My First Page </title></head>');
    res.write('<body><h1>Hello from my Node server learn project!</h1></body>');
    res.write('</html>');
    res.end('Hello World\n');
};
exports.reqHandler = reqHandler;
