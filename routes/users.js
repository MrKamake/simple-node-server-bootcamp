const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const USERS = [
  {
    id: 1,
    name: 'ken huh'
  },
  {
    id: 2,
    name: 'wan huh'
  },
  {
    id: 3,
    name: 'vaco'
  }
];

// TODO: Change to your own secret string value and set up as an environment variable
const YOUR_SECRET_KEY = process.env.YOUR_SECRET_KEY;
// DO NOT MODIFY
exports.YOUR_SECRET_KEY = YOUR_SECRET_KEY;
exports.USERS = USERS;

/*

  TODO: GET /users

  - set up body-parser middleware for JSON response
  - https://github.com/expressjs/body-parser#bodyparserjsonoptions

*/
router.get('/', (req, res, next) => {
  // Your code here..
  res.send(USERS);
});

/*

  TODO: POST /users

*/
router.post('/', (req, res, next) => {
  // Your code here..
  USERS.push(req.body);

  res.status(201).send(USERS);
});

/*

  TODO: PUT /users/:user_id

*/
router.put('/:user_id', (req, res, next) => {
  // Your code here..
  const targetUserId = USERS.findIndex(user => user.id === +req.params.user_id);

  if (targetUserId === -1) {
    res.status(400).send({ error: 'invalid user' });
  } else {
    USERS[targetUserId].name = req.body.name;

    res.send(USERS[targetUserId]);
  }
});

/*

  TODO: DELETE /users/:user_id

*/
router.delete('/:user_id', (req, res, next) => {
  const targetUserId = USERS.findIndex(user => user.id === +req.params.user_id);

  if (targetUserId === -1) {
    res.status(400).send({ error: 'invalid user' });
  } else {
    USERS.splice(targetUserId, 1);

    res.send({ result: 'ok' });
  }
});

/*

  TODO: GET /users/:user_id/token

*/
router.get('/:user_id/token', (req, res, next) => {
  // Your code here..
  const user = USERS.find(user => user.id === +req.params.user_id);

  if (user) {
    res.send({
      result: 'ok',
      token: jwt.sign(user, YOUR_SECRET_KEY)
    });
  } else {
    res.status(400).send({ error: 'invalid user' });
  }
});

/*

  TODO: GET /users/:user_id/secret

*/
router.get('/:user_id/secret', (req, res, next) => {
  // Your code here..
  const user = USERS.find(user => user.id === +req.params.user_id);
  const userToken = jwt.sign(user, YOUR_SECRET_KEY);
  const requestToken = req.get('VC-CLIENT-TOKEN');
  
  if (userToken !== requestToken) {
    res.status(401).send({ error: 'unauthorized' });
  } else {
    res.send({ result: 'ok', secret: 'i am secret something' });
  }
});

exports.router = router;
