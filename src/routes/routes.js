var user = require('../modules/user');

function Router (app) {

  app.get('/api', function (req, res) {
    return res.send('API is running');
  });

  app.get('/api/users', user.all);
  app.get('/api/user', user.add); //  post
}

 module.exports = Router;