var express = require('express');
var path = require('path');
var config = require('./config');
var router = require('./routes/routes');
var defaultErrors = require('./errors/defaultErrors');

var app = express();

router(app);
defaultErrors(app);

app.listen(config.port, function () {
  console.log('Express listennig');
});
