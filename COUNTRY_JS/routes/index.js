var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var country = require('countryjs');

router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});

router.get('/pages/:state/', function(req, res, next){
 if (typeof country.info(req.params.state) === "undefined") {
   return next(createError(422, 'OOPS! State not found'));
 }
 else
 {
   res.render('state', {state: country.info(req.params.state)}) ; //Rendiamo lo stato un parametro
 }
})

module.exports = router;