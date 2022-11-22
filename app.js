var express = require('express');
var app = express();
var errorHandlers = require('./middleware/errorhandler');
var log = require('./middleware/log');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var partials = require('express-partials');
app.use(session({secret: 'secret'}));
app.use(session());
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    store: new RedisStore(
    {url: 'redis://localhost'})
    })
   );
app.use(cookieParser('secret'));
app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'})
app.use(log.logger);
app.use(express.static(__dirname + '/static'));
var routes = require('./routes');
app.use(partials());
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
