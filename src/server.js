var express = require('express');
var path = require('path');
var config = require('./config');
var router = require('./routes/routes');
var defaultErrors = require('./errors/defaultErrors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var passport       = require('passport');
var oauth2         = require('./libs/oauth2');

var app = express();

app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: 'SECRET' }));

app.post('/oauth/token', oauth2.token);
 
// Passport:
app.use(passport.initialize());
app.use(passport.session());

router(app);
defaultErrors(app);

app.listen(config.port, function () {
  console.log('Express listennig');
});
