var repo = require('../Repositories/ActivityCategoryRepository');
var messageHandler = require('../Utils/MessageHandler');
exports.getActivityCategories = function(req, res) {
    repo.get({}, function(err, data) {
        if (err) res.json({ error: err, message: messageHandler.resourceNotFound() });
        res.json({ data: data, message: messageHandler.resourceFound() });
    });

}

exports.getActivityCategory = function(req, res) {
    id = req.params.id;
    repo.getById(id, function(err, data) {
        if (err) res.json({ err: err, message: messageHandler.resourceFound() });
        res.json({ data: data, message: messageHandler.resourceFound() });
    });
}

exports.addActivityCategory = function(req, res) {
    var data = {
        name: req.body.name,
        description: req.body.description
    }
    repo.add(data, function(err, activityCategory) {
        if (err) return res.json({ error: err, message: messageHandler.failedToCreate() });
        res.json({ data: activityCategory, message: messageHandler.createSuccessful() })
    });
}

exports.deleteActivityCategory = function(req, res) {
    var options = {
        _id: req.params.id
    }
    repo.delete(options, function(err, data) {
        if (err) res.json({ error: err, message: messageHandler.failedToDelete() });
        res.json({ data: data, message: messageHandler.deleteSuccessful() });
    })
}
exports.updateActivityCategory = function(req, res) {
    var options = {
        name: req.body.name,
        description: req.body.description
    }
    var id = {
        _id: req.params.id
    }
    repo.update(id, options, function(err) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() })
        res.json({ message: messageHandler.updateSuccessful() });
    })
}