const express = require('express');
const app = express();
const port = 1337;

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('static'));

app.get('/', function(req, res) {
    res.render('home', {title: 'Home'});
});
app.get('/dolphin', function(req, res) {
    res.render('dolphin', {title: 'About Us'});
});
app.get('/unicorn', function(req, res) {
    res.render('unicorn', {title: 'Contact Us'});
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

