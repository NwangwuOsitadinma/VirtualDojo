var express = require('express');
var router = express.Router();
var sampleController = require('../Controllers/SampleController');
var activityCategoryController = require('../Controllers/ActivityCategoryController')

//var repo = require('../Repositories/SampleRepository').SampleRepository;
//var repository =  repo(model);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/sample/create', sampleController.addSample);

router.get('/samples', sampleController.getSamples);

router.post('/activitycategory/create', activityCategoryController.addActivityCategory);

router.get('/activitycategories', activityCategoryController.getActivityCategories);

module.exports = router;