var UserModel = require('../models/user');
var log = require('../libs/log')(module);

function all(req, res) {
  return UserModel.find(function (err, users) {
    if (!err) {
      return res.send(users);
    } else {
      res.statusCode = 500;
      log.error('Internal error(%d): %s',res.statusCode,err.message);
      return res.send({ error: 'Server error' });
    }
  });
}

function add(req, res) {
  var user = new UserModel({
      username: 'petya',
      hashedPassword: '12345aA@',
      salt: '$223'
  });
  user.save(function (err) {
      if (!err) {
          log.info("user created");
          return res.send({ status: 'OK', user:user });
      } else {
          console.log(err);
          if(err.name == 'ValidationError') {
              res.statusCode = 400;
              res.send({ error: 'Validation error' });
          } else {
              res.statusCode = 500;
              res.send({ error: 'Server error' });
          }
          log.error('Internal error(%d): %s',res.statusCode,err.message);
      }
  });
}

module.exports.all = all;
module.exports.add = add;