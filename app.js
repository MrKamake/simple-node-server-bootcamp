const express = require('express');

const index = require('./routes/index');
const articles = require('./routes/articles');
const users = require('./routes/users').router;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useFindAndModify: false });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connect MongoDB")
});

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

/*

  Route Setup
  https://expressjs.com/en/5x/api.html#router

 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', index);
app.use('/articles', articles);
app.use('/users', users);
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.status(404).send('404');
});

// [ DO NOT MODIFY ]: error handler
// https://expressjs.com/en/guide/error-handling.html
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
