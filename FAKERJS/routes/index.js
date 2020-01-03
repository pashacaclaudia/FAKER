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

    if (typeof person === "undefined") {
        return next(createError(422, 'OPS! Non abbiamo trovato uno scrittore con quel nome :('));
    } else {
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
    }
});

router.get('/api/scrittori', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(peopleJson, null, 2));
});

router.get('/api/scrittori/:id/', function(req, res, next) {
    const personId = peopleJson.people.find(p => p.id === req.params.id);
    if (typeof personId === "undefined") {
        return next(createError(423, 'OPS! Non abbiamo trovato uno scrittore con quell\'id :('));
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(person));
    }
});

router.get('/api/img-scrittori', function(req, res, next) {
    
    let images = [];
    i = 0;

    while(i < 12){
        images.push(peopleJson.people[i].image);
        i++;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(images, null, 2));
});

router.get('/dettagli/:person/', function(req, res, next) {
    const person = peopleJson.people.find(p => p.name === req.params.person);
    res.render('dettagli', {
        person
    })
});

module.exports = router;
