var service = require('../Services/ActivityCategoryService');

exports.getActivityCategories = function(req, res) {
    return service.getActivityCategories(req, res);
}

exports.addActivityCategory = function(req, res) {
    return service.addActivityCategory(req, res);
}

exports.deleteActivityCategory = function(req, res) {
    return service.deleteActivityCategory(req, res);
}

exports.updateActivityCategory = function(req, res) {
    return service.updateActivityCategory(req, res);
}