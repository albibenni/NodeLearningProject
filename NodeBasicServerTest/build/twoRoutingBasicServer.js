"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const port = process.env.PORT || 3000;
const server = (0, http_1.createServer)((req, res) => {
    var _a;
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase
    const path = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            break;
    }
});
server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'));
