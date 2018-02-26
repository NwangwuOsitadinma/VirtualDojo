var repository = require('../Repositories/ActivityTypeRepository');
var messageHandler = require('../Utils/MessageHandler');
exports.getActivityTypes = function(req, res) {
    repository.get({}, (err, data) => {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: data, message: messageHandler.resourceFound() })
    });
}

exports.getActivityType = function(req, res) {
    id = req.params.id;
    repository.getById(id, function(err, data) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: data, message: messageHandler.resourceFound() });
    });
}

exports.addActivityType = function(req, res) {
    var data = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        activityCategory: req.body.activityCategory
    }

    repository.add(data, function(err, data) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: data, message: messageHandler.createSuccessful() });
    });
}

exports.updateActivityType = function(req, res) {
    var data = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        activityCategory: req.body.activityCategory
    }
    var id = {
        _id: req.params.id
    }
    repository.update(data, id, function(err, data) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: data, message: messageHandler.updateSuccessful() });
    });
}
exports.deleteActivityCategory = function(req, res) {
    var options = {
        _id: req.params.id
    }
    repository.delete(options, function(err, data) {
        if (err) res.json({ error: err, message: messageHandler.failedToDelete() });
        res.json({ data: data, message: messageHandler.deleteSuccessful() });
    })
}