const http = require('http');
const app = require('./app');
//const { initializeSocket } = require('./socket');
const port = process.env.PORT || 4000;
const cluster = require('cluster');
const os = require('os');



//initializeSocket(server);

// Check if the current process is the master
if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master process is running. Forking for ${numCPUs} CPUs...`);

    // Fork a worker process for each CPU
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    // Listen for worker exit and restart it
    cluster.on('exit', (worker, code, signal) => {
        console.error(`Worker ${worker.process.pid} died. Starting a new worker...`);
        cluster.fork();
    });
} else {

    const server = http.createServer(app);

    // Start the server
    server.listen(port, () => {
        console.log(`Worker ${process.pid} is listening on port ${port}`);
    });
}
