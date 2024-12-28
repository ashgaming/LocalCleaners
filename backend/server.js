const http = require('http');
const app = require('./app');
//const { initializeSocket } = require('./socket');
const port = process.env.PORT || 4000;

const server = http.createServer(app);

const server2 = http.createServer(app);

//initializeSocket(server);

server.listen(port,()=>{
    console.log(`server is running on port:http://localhost:${port}`)
});

server2.listen(5000,()=>{
    console.log(`server is running on port:http://localhost:${'5000'}`)
});