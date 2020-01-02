var express = require('express');
var router = express.Router();
var faker = require('faker');
const fs = require('fs');

/* GET users listing. */
router.get('/generate', function(req, res, next) {
 res.send(createFakePeople());
});

function createFakePeople()
{
    let people = { "people" : [] }
    i = 0;

    while(i < 12){

        let randomName = faker.name.findName();
        let randomQuote = faker.lorem.sentence();
        let randomEmail = faker.internet.email();
        let randomUrl = faker.internet.url();
        let randomCountry = faker.address.country();
        let randomImage = faker.image.avatar();
    
        let person = {
            name: randomName,
            quote: randomQuote,
            email: randomEmail,
            url: randomUrl,
            country: randomCountry,
            image: randomImage
        }

        people.people.push(person);
        i++;
    }

    let data = JSON.stringify(people, null, 3);
    fs.writeFileSync('people.json', data);

    return people;
}

module.exports = router;
