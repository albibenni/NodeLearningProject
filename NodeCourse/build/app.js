"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const routes_1 = require("./routes");
const port = 3000;
const server = http.createServer(routes_1.reqHandler);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
