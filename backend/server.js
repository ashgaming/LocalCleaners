const http = require('http');
const app = require('./app');
// const { initializeSocket } = require('./socket');
const port = process.env.PORT || 4000;

const server = http.createServer(app);

// Error handling for the server
server.on('error', (err) => {
    console.error('Server error:', err);
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use`);
    } else if (err.code === 'EPIPE') {
        console.error('Broken pipe error. Possible client disconnection.');
    } else {
        console.error('Unexpected server error:', err);
    }
    process.exit(1); // Exit if the server encounters an error
});

// Start the server
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// initializeSocket(server);





/*const http = require('http');
const app = require('./app');
//const { initializeSocket } = require('./socket');
const port = process.env.PORT || 4000;
const cluster = require('cluster');
const os = require('os');

// Check if the current process is the master
if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
   // console.log(`Master process is running. Forking for ${numCPUs} CPUs...`);

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

    // Error handling for the server
    server.on('error', (err) => {
        console.error('Server error:', err);
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${port} is already in use`);
        } else if (err.code === 'EPIPE') {
            console.error('Broken pipe error. Possible client disconnection.');
        } else {
            console.error('Unexpected server error:', err);
        }
        process.exit(1); // Exit if the server encounters an error
    });

    // Start the server
    server.listen(port, () => {
        console.log(`Worker ${process.pid} is listening on port ${port}`);
    });
    //  initializeSocket(server);
}
*/