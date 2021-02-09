const http = require('http');
const fs = require('fs');
const path = require('path');
const projectsModule = require('./projectsModule.js');
// another option for linking the custom module:
// const {projectsOwerview} = require("./projectsModule")

const fileExtentions = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': ' application/json',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg + xml',
};

// just cluster error testing along with Pete
const cluster = require('cluster');
console.log('WORKER ID :>> ', cluster.worker.process.pid);
if (Math.random() > 0.5) {
    throw new Error('');
}

http.createServer((request, response) => {
    // handling possible errors
    request.on('error', (error) => console.log('request error: ', error));
    response.on('error', (error) => console.log('response error: ', error));

    // sanity check about the request
    console.log('requested url:>> ', request.url);

    // handling traversal dir reach attempts
    const requestedPath = path.normalize(__dirname + '/projects' + request.url);
    // console.log("requestedPath: ", requestedPath);
    if (!requestedPath.startsWith(__dirname + '/projects')) {
        response.statusCode = 403; // forbidden action code
        return response.end(`<h1>Intruders!!! Warn the others!
        This action is forbidden!</h1>`);
    }

    // dealing only with GET requests
    if (request.method != 'GET') {
        response.statusCode = 405; // method not allowed code
        response.setHeader('content-type', 'twxt/html');
        return response.end(
            `<h3>Your requested something that I cannot accept.</h3>`
        );
    } else {
        if (request.url == '/') {
            response.statusCode = 202;
            response.setHeader('content-type', 'text/html');
            response.end(projectsModule.projectsOwerview());
        }
    }
    // console.log(__dirname + "/projects/Connect 4/indir.gif");

    fs.stat(requestedPath, (error, stats) => {
        if (error) {
            console.log('unexisting file requsted :>> ', error);
            response.statusCode = 404;
            return response.end();
        }
        if (stats.isDirectory()) {
            console.log('user requested a dir');
            // checking if the request ends with a "/" and sending the index.html
            if (request.url.endsWith('/')) {
                const readStreamHtmlDirectory = fs.createReadStream(
                    requestedPath + 'index.html'
                );
                // response.setHeader('content-type', 'text/html');
                readStreamHtmlDirectory.pipe(response);
                readStreamHtmlDirectory.on('error', (error) => {
                    console.log(
                        'there is an error in readStreamHtml for Directory: ',
                        error
                    );
                    response.statusCode = 500; // code for internal server error
                    return response.end();
                });
            } else {
                // redirect user but add a "/"
                response.statusCode = 302;
                response.setHeader('Location', request.url + '/');
                return response.end();
            }
        } else {
            console.log('user requested a file :>> ');
            var fileExtention = path.extname(requestedPath);
            const readStreamHtmlFile = fs.createReadStream(requestedPath);
            response.setHeader('content-type', fileExtentions[fileExtention]);
            readStreamHtmlFile.pipe(response);

            readStreamHtmlFile.on('error', (error) => {
                console.log('there is an error in readStreamHtmlFile: ', error);
                response.statusCode = 500; // code for internal server error
                return response.end();
            });
        }
    });
}).listen(8080, () => console.log('I am all ears!'));

// // ================HARDCOED=======================
// // creating stream and reading required files
// const stream = fs.createReadStream(
//     __dirname + '/projects/Connect 4/indir.gif'
// );

// // sending the read data as a response
// stream.pipe(response);
// //==================================
