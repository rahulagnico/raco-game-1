var express = require('express');
var router = express.Router();
var arr = require('../data/jokes.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'RACo Game 1', joke: getRandomJoke() });
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var getRandomJoke = function () {
    var i = randomNumber(0, arr.length - 1);
    return arr[i].joke;
};

module.exports = router;
