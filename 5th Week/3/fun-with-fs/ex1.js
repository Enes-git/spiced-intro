const fs = require("fs");

function logSizes(dirPath) {
    // use fs.readdir with the withFileTypes option set to true 
    // in order to read the contents of the directory. 
    fs.readdir(dirPath, { withFileTypes: true }, function (error, items) {
        if (error) {
            console.log("ERROR: ", error);
        } else {
            items.forEach((item) => {
                if (item.isFile()) {
                    var filePath = `${dirPath}/${item.name}`
                    fs.stat(filePath, function (error, stats) {
                        if (error) {
                            console.log("ERROR: ", error);
                        } else {
                            console.log(`${filePath}: ${stats.size}`);
                        }
                    })
                } else {
                    logSizes(`${dirPath}/${item.name}`)
                }
            });
        }
    });
}
logSizes(__dirname + "/files");
// console.log(__dirname);