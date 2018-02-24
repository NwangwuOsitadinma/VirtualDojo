var service = require('../Services/ActivityCategoryService');

exports.getActivityCategories = function(req, res) {
    return service.getActivityCategories(req, res);
}

exports.addActivityCategory = function(req, res) {
    return service.addActivityCategory(req, res);
}