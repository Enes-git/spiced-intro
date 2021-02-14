let { readdir, stat } = require('fs');
const { promisify } = require('util');

readdir = promisify(readdir);
stat = promisify(stat);

function logSizes(dirPath) {
    // use readdir with the withFileTypes option set to true
    // in order to read the contents of the directory.

    Promise.all([readdir, stat])
        .then(function () {
            readdir(dirPath, { withFileTypes: true }).then((items) => {
                items.forEach((item) => {
                    if (item.isFile()) {
                        let filePath = `${dirPath}/${item.name}`;
                        stat(filePath).then((stats) => {
                            console.log(`${filePath}: ${stats.size}`);
                        });
                    } else {
                        logSizes(`${dirPath}/${item.name}`);
                    }
                });
            });
        })
        .catch(function () {
            console.log('At least one of my promises was rejected :(');
        });
    console.log('done!'); // not working as intended
}
logSizes(__dirname + '/files');
// console.log(__dirname);
