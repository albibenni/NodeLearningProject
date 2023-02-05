import {createServer} from 'http';
import {reqHandler} from "./routes";

const port = 3000;
const server = createServer(reqHandler);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
