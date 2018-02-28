var repository = require('../Repositories/GroupRepository');
var messageHandler = require('../Utils/MessageHandler');

exports.getGroups = function(req, res) {
    repository.get({}, function(err, groups) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: groups, message: messageHandler.resourceFound() });
    });
}

exports.getGroup = function(req, res) {
    var id = req.params.id;
    repository.getById(id, function(err, group) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: group, message: messageHandler.resourceFound() });
    });
}

exports.addGroup = function(req, res) {
    var data = {
        name: req.body.name,
        groupType: req.body.groupType,
        isActive: true
    }
    repository.add(data, function(err, group) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: group, message: messageHandler.createSuccessful() });
    });
}

exports.updateGroup = function(req, res) {
    var data = {
        name: req.body.name,
        groupType: req.body.groupType,
        isActive: true
    }
    var id = { _id: req.params.id };
    repository.update(data, id, function(err, group) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: group, message: messageHandler.updateSuccessful() });
    });
}

exports.deleteGroup = function(req, res) {
    var options = { _id: req.params.id };
    repository.delete(id, function(err) {
        if (err) res.json({ err: err, message: messageHandler.failedToDelete() });
        res.json({ message: messageHandler.deleteSuccessful() });
    });
}