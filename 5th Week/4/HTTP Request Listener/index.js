const { error } = require("console");   // this is added by vs code i guess
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    // logging request info
    console.log(request.method, request.url, request.headers);

    // handling possible errors on request & response 
    request.on("error", error => console.log(error));
    response.on("error", error => console.log(error));

    // defining actions depending on the requests
    if (request.method == "GET") {
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        response.end(`
        <!doctype html>
        <html>
        <title>Hello World!</title>
        <p>Hello World!</p>
        </html>
        `);
        // console.log(response)
    } else if (request.method == "HEAD") {
        // request.on()
        response.statusCode = 200;
        response.setHeader("content-type", "text/html");
        response.end();
    } else if (request.method == "POST") {
        // getting the body & logging it
        var body = "";
        request.on("data", function (chunk) {
            body += chunk;
        }).on("end", function () {
            console.log(body);

            // responding to post request
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end();
        });

    } else {
        response.statusCode = 405;
        response.setHeader("content-type", "text/html");
        response.end(`404 Not Found!`);
    }

    // PART 2
    // recording request infos
    const date = Date.now().toLocaleDateString;
    const time = Date.now().toLocaleTimeString;
    fs.appendFileSync("requests.txt", `Request Date: ${date}\t${time}\t Request Method: ${request.method}\t Request url: ${request.url}\t Request Header: ${request.headers["user-agent"]}`);
});


// calling the listen method for port 8080 in the local server
server.listen(8080, () => console.log("I'm all ears!"));