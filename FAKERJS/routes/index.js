var express = require('express');
var router = express.Router();
const peopleJson = require('../people.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Home',
        people: peopleJson.people
    });
});

module.exports = router;
