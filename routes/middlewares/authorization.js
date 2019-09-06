const jwt = require('jsonwebtoken');
const { USERS, YOUR_SECRET_KEY } = require('../users');

/*

  TODO: Fill in the token validation middleware below

  - https://expressjs.com/ko/guide/using-middleware.html
  - JWT (jsonwebtoken): https://github.com/auth0/node-jsonwebtoken
  - use sign, verify methods in the jsonwebtoken module

*/
function verifyToken(req, res, next) {
  // Your code here..
  try {
    const token = req.get('VC-CLIENT-TOKEN');
    const user = jwt.verify(token, YOUR_SECRET_KEY);

    if (user) {
      next();
    } else {
      throw new Error();
    }
  } catch (err) {
    res.status(401).json({ error: 'unauthorized' });
  }
}

exports.verifyToken = verifyToken;
