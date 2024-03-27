const express = require('express');
const app = express();
const port = 1337;

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
    res.render('home', {title: 'Home'});
});
app.get('/index', function(req, res) {
    res.render('home', {title: 'Home'});
});
app.get('/about', function(req, res) {
    res.render('about', {title: 'About'});
});

// 404 page
app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

//500 page
app.use(function(req, res, next) {
    res.status(500);
    res.render('500');
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});