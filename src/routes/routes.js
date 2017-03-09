var user = require('../modules/user');
var Auth = require('../modules/auth');
var checkAuth = require('../middleware/checkAuth');
var passport = require('passport');



function Router (app) {

  app.get('/userInfo',
      passport.authenticate('bearer', { session: false }),
          function(req, res) {
              // req.authInfo is set using the `info` argument supplied by
              // `BearerStrategy`.  It is typically used to indicate scope of the token,
              // and used in access control checks.  For illustrative purposes, this
              // example simply returns the scope in the response.
              res.json({ user_id: req.user.userId, name: req.user.username, scope: req.authInfo.scope })
          }
  );

  app.get('/api', function (req, res) {
    return res.send('API is running');
  });

  app.get('/login', Auth.login);
  app.get('/register', Auth.register);

  app.get('/test', user.all);

  app.get('/api/users', user.all);
  app.get('/api/user', user.add); //  post
}

 module.exports = Router;