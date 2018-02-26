var repository = require('../Repositories/ActivityRepository');
var messageHandler = require('../Utils/MessageHandler');

exports.getActivities = function(req, res) {
    repository.get({}, function(err, data) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: data, message: messageHandler.resourceFound() });
    });
}

exports.getActivity = function(req, res) {
    id = req.params.id;
    repository.getById(id, function(err, activity) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: activity, message: messageHandler.resourceFound() });
    });
}

exports.addActivity = function(req, res) {
    var data = {
        name: req.body.name,
        startTime: req.body.startTime,
        isActive: false
    };
    repository.add(data, function(err, activity) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: activity, message: messageHandler.createSuccessful() });
    });
}

exports.updateActivity = function(req, res) {
    var data = {
        name: req.body.name,
        startTime: req.body.startTime,
        isActive: false
    };
    var id = {
        _id: req.params.id
    };
    repository.update(data, id, function(err, activity) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: activity, message: messageHandler.updateSuccessful() });
    });
}

exports.deleteActivity = function(req, res) {
    var id = {
        _id: req.params.id
    };
    repository.delete(id, function(err, activity) {
        if (err) res.json({ err: err, message: messageHandler.failedToDelete() });
        res.json({ data: activity, message: messageHandler.deleteSuccessful() });
    });
}