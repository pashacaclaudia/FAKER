var express = require('express');
var router = express.Router();
const peopleJson = require('../people.json');
var faker = require('faker');
var createError = require('http-errors');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Home',
        people: peopleJson.people
    });
});

router.get('/scrittori/:person/', function(req, res, next) {
    const person = peopleJson.people.find(p => p.name === req.params.person);

    let quotes = [];
    i = 0;

    while(i < 10){
        let sentence = faker.lorem.sentence();
        quotes.push(sentence);
        i++;
    }

    res.render('scrittori', {
        person,
        quotes
    })
});

router.get('/dettagli/:person/', function(req, res, next) {
    const person = peopleJson.people.find(p => p.name === req.params.person);
    res.render('dettagli', {
        person
    })
});

module.exports = router;
