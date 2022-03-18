var express = require('express');
const Joke = require('awesome-dev-jokes');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'RACo Game 1', joke: Joke.getRandomJoke() });
});

module.exports = router;
