var service = require('../Services/SampleService');
var activity = require('../Services/ActivityCategoryService')
exports.getSamples = function(req, res) {
    return service.getSamples(req, res);
}

exports.addSample = (req, res) => {
    return service.addSample(req, res);
}