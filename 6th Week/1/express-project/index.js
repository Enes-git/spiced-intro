const cookieParser = require('cookie-parser');
const { request, response } = require('express');

const express = require('express');
var app = express();

// checking the server
app.listen(8080, () => {
    console.log('I am all ears!');
});

// cookie middleware
app.use(cookieParser());

// serving the files from project folder
app.use(express.static(__dirname + '/projects'));

app.use(express.static());
// checking request-response
// app.get('/', (request, response) => {
//     console.log(`testing ${request.method} request to the ${request.url} route`);
//     response.send('<h1>Hello, Goodbye..</h1>');
// });

// app.use()

// app.get("/projects/:foldername", (request, response)=>{console.log('reach attempt :>> ', request.params.foldername);})

app.get('/cookie', (request, response) => {
    response.send(`
        <h3>Cookies Warning</h3>
        <p>You must accept our cookie policy in order to continue using our site.</p>
        <form method="POST">
            <input type="checkbox" name="cookie-on"><span>Do you want some cookie?</span></input>
            <button> Submit </button>
        </form>`);
});

app.post('/cookie', (request, response) => {
    const { accept } = request.body;
    if (accept) {
        response.cookie('authentication', 'true');
    }
});
