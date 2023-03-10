"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const fs_1 = require("fs");
const port = process.env.PORT || 3000;
function serveStaticFile(res, path, contentType, responseCode = 200) {
    (0, fs_1.readFile)(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('500 - Internal Error');
        }
        res.writeHead(responseCode, { 'Content-Type': contentType });
        res.end(data);
    });
}
const server = (0, http_1.createServer)((req, res) => {
    var _a;
    // normalize url by removing querystring, optional trailing slash, and
    // making lowercase
    const path = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (path) {
        case '':
            serveStaticFile(res, '/../public/home.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/../public/about.html', 'text/html');
            break;
        case '/img':
            serveStaticFile(res, '/../public/img/logo.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/../public/404.html', 'text/html', 404);
            break;
    }
});
server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'));
