import {createServer} from "http";

const port = 3000;

const server = createServer((req, res): any => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
