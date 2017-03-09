function login() {

}
function register() {

}

function test(req, res) {
  // req.authInfo is set using the `info` argument supplied by
  // `BearerStrategy`.  It is typically used to indicate scope of the token,
  // and used in access control checks.  For illustrative purposes, this
  // example simply returns the scope in the response.
  res.json({ user_id: req.user.userId, name: req.user.username, scope: req.authInfo.scope })
}

module.exports.login = login;
module.exports.register = register;
module.exports.test = test;