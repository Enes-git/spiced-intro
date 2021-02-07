const fs = require('fs');
module.exports.projectsOwerview = function (path) {
    var currentDirHtmlList = `<!doctype html>
    <h1>Projects</h1>`;
    const projectsDir = fs.readdirSync(path + '/projects', {
        withFileTypes: true,
    });
    projectsDir.forEach((item) => {
        if (item.isDirectory()) {
            currentDirHtmlList += `<div><a href="/${item.name}/>${item.name}</a></div>`;
        }
    });
    return currentDirHtmlList;
};
