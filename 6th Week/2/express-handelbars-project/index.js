const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const myProjects = require('./projects.json');

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('./public'));
app.use(express.static('./projects'));
app.get('/', (request, response) => {
    response.render('welcome', {
        layout: 'main',
        myProjects,
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        layout: 'main',
        emojis: ['whale', 'vampire', 'poop'],
    });
});

app.listen(8080, () => console.log("I'm all ears!"));

// =========================================
// ==========================================================
// const cookieParser = require('cookie-parser');

// const express = require('express');
// var app = express();

// // cookie middleware
// app.use(cookieParser());

// // serving the files from project folder
// app.use(express.static(__dirname + '/projects'));
// // a middlewware to check if cookies accepted
// // and and if statement

// app.get('/cookie', (request, response) => {
//     response.send(`
//         <h3>Cookies Warning</h3>
//         <p>You must accept our cookie policy in order to continue using our site.</p>
//         <form method="POST">
//         <input type="checkbox" name="cookie-on"><span>Do you want some cookie?</span></input>
//         <button> Submit </button>
//         </form>`);
// });

// app.post('/cookie', (request, response) => {
//     const { accept } = request.body;
//     if (accept) {
//         response.cookie('authentication', 'true');
//     }
// });

// // checking the server
// app.listen(8080, () => {
//     console.log('I am all ears!');
// });
