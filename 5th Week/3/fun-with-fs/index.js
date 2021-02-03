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
    });
    return itemsObj;
}
// console.log(mapSizes(__dirname + "/files"));
var calling = mapSizes(__dirname + "/files");
// console.log(calling);
var strCalling = JSON.stringify(calling, null, 4);
// console.log(strCalling);
fs.writeFileSync("files.json", strCalling);
