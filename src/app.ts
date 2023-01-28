import * as http from 'http';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('<html>');
    res.write('<head><title> My First Page </title></head>');
    res.write('<body><h1>Hello from my Node server learn project!</h1></body>');
    res.write('</html>');
    res.end('Hello World\n');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
