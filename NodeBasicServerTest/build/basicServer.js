"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const port = 3000;
const server = (0, http_1.createServer)((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
