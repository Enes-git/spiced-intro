const fs = require("fs");

const mapSizes = function (dirPath) {

    const items = fs.readdirSync(dirPath, { withFileTypes: true });
    // console.log(dirPath);
    // console.log(items);
    var itemsObj = {};
    items.forEach((item) => {
        if (item.isFile()) {
            const stat = fs.statSync(`${dirPath}/${item.name}`);
            itemsObj[item.name] = stat.size;
        } else {
            const dirItemValue = mapSizes(`${dirPath}/${item.name}`)
            itemsObj[item.name] = dirItemValue;
        }
        return itemsObj;
    });

    // function (error, items) {
    //     if (error) {
    //         console.log("ERROR: ", error);
    //     } else {
    //         items.forEach((item) => {
    //             if (item.isFile()) {
    //                 var filePath = `${dirPath}/${item.name}`
    //                 fs.stat(filePath, function (error, stats) {
    //                     if (error) {
    //                         console.log("ERROR: ", error);
    //                     } else {
    //                         console.log(`${filePath}: ${stats.size}`);
    //                     }
    //                 })
    //             } else {
    //                 logSizes(`${dirPath}/${item.name}`)
    //             }
    //         });
    //     }
    // }
}
var calling = mapSizes(__dirname + "/files");
console.log(calling);
var strCalling = JSON.stringify(calling);
console.log(strCalling);
// fs.writeFileSync("files.json", strCalling);
