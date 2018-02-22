var express = require('express');
var router = express.Router();
var sampleController = require('../Controllers/SampleController');
//var repo = require('../Repositories/SampleRepository').SampleRepository;
//var repository =  repo(model);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/sample/create', sampleController.addSample);

router.get('/samples', sampleController.getSamples);


module.exports = router;