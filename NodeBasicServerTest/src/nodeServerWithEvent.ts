import {createServer} from "http";
import {writeFile} from "fs";

const port = 3000;

const server = createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST" >' +
            '<input type="text" name ="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end('Hello World\n');
    }
    if (url === '/message' && req.method === 'POST') {
        const body1: any[] = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body1.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body1).toString();
            const message = parsedBody.split('=')[1];
            writeFile('message.txt', message, (err) => {
                console.error(err);
            });
        });
        writeFile('message.text', 'DUMMY', (err) => {
            console.error(err);
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
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
