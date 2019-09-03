const express = require('express');
const router = express.Router();

const APPLICATION_TITLE = 'Express';

/*

  TODO: GET /

  - setup template engine in app.js
  - https://expressjs.com/en/guide/using-template-engines.html
  - https://expressjs.com/ko/guide/using-template-engines.html

*/
router.get('/', (req, res, next) => {
  // Your code here..
  res.render('index', { title: APPLICATION_TITLE });
});

/*

  TODO: POST /

*/
router.post('/', (req, res, next) => {
  // Your code here..
  res.status(201).render('success', { message: req.body.title });
});

/*

  TODO: GET /google

  - redirect to google
  - https://expressjs.com/en/api.html#res

*/
router.get('/google', (req, res, next) => {
  // Your code here..
  res.redirect(302, 'www.google.com');
});

module.exports = router;
