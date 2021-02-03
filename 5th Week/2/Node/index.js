const myUrl = process.argv[2];
// console.log(myUrl);
// console.log(typeof (myUrl));

const url = require("url");
const pUrl = url.parse(myUrl);
// console.log(pUrl);
// console.log(pUrl.href);

const querystring = require('querystring');
const values = querystring.parse(pUrl.query);
console.log(values);

console.log(`The protocol is ${pUrl.protocol}
The host is ${pUrl.host}
The hostname is ${pUrl.hostname}
The port is ${pUrl.port}
The pathname is ${pUrl.pathname}
The query is ${pUrl.query}`);

if (pUrl.query != null) {
    console.log(`The value of the a parameter is ${values.a}
The value of the b parameter is ${values.b}`);
}
