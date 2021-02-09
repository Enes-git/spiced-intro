const cluster = require('cluster');
const os = require('os');

// console.log('os.cpus().length :>> ', os.cpus().length);

cluster.setupMaster({
    exec: 'index.js',
});
for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
}
