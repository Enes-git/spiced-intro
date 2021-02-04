const http = require("http");
const querystring = require("querystring");
const chalk = require("chalk");
// console.log(chalk.yellow("test"));

const server = http.createServer((request, response) => {
    // console.log(request.method, request.url, request.headers);

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
            <title>Colors</title>
            <form method="POST">
            <input type="text" name="text">
            <select name="color">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
                <option value="gray">gray</option>
                <option value="magenta">magenta</option>
                <option value="cyan">cyan</option>
            </select>
            <button type="submit">Go</button>
            </form>
            </html>
        `);
    } else if (request.method == "POST") {
        // getting the body
        var body = "";
        request.on("data", function (chunk) {
            body += chunk;
        }).on("end", function () {
            // parsing the body & logging
            const { text, color } = querystring.parse(body);
            console.log(chalk[color](text));

            // responding to post request
            response.statusCode = 202;
            response.end(`<!doctype html>
            <html>
            <title>it is better to have loved and lost than never to have loved at all</title>
            <a href="/" style="${color}">${text}</a>
            </html>`);
        });
    } else {
        response.statusCode = 405;
        response.setHeader("content-type", "text/html");
        response.end(`404 Not Found!`);
    }
});



server.listen(8080, () => console.log("I'm all ears!"));
