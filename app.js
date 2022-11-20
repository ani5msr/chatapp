var express = require('express');
var partials = require('express-partials');
var app = express();
var errorHandlers = require('./middleware/errorhandler');
var log = require('./middleware/log');
app.use(partials());
app.set('view options', {defaultLayout: 'layout'})
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
var routes = require('./routes');
app.set('view engine', 'ejs');
app.use(log.logger);
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginProcess);
app.get('/chat', routes.chat);
app.get('/account/login', routes.login);
app.get('/error', function(req, res, next){
    next(new Error('A contrived error'));
   });
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);
app.listen(3000);
console.log("App server running on port 3000");
