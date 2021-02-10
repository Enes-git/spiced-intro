const { response } = require('express');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const myProjects = require('./projects.json');

// required stuff for handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('./public'));
app.use(express.static('./projects'));

app.get('/', (request, response) => {
    response.render('welcome', {
        myProjects,
    });
});

app.get('/about', (request, response) => {
    response.render('about', {
        aboutMe: `I am ...`,
    });
});

app.get('/projects/:project', (request, response) => {
    const typedProject = request.params.project;
    const selectedProject = myProjects.find(
        (item) => item.projectDir == typedProject
    );
    if (!selectedProject) {
        return response.sendStatus(404);
    }
    response.render('description', {
        myProjects,
        selectedProject,
    });
});
app.listen(8080, () => console.log("I'm all ears!"));
