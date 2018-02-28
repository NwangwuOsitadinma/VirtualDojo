var repository = require('../Repositories/GroupTypeRepository');
var messageHandler = require('../Utils/MessageHandler');

exports.getGroupTypes = function(req, res) {
    repository.get({}, function(err, groupTypes) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: groupTypes, message: messageHandler.resourceFound() });

    });
}

exports.getGroupType = function(req, res) {
    var id = req.params.id;
    repository.getById(id, function(err, groupType) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: groupType, message: messageHandler.resourceFound() });
    });
}

exports.addGroupType = function(req, res) {
    var data = {
        name: req.body.name
    }
    repository.add(data, function(err, groupType) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: groupType, message: messageHandler.createSuccessful() });
    });
}

exports.updateGroupType = function(req, res) {
    var data = {
        name: req.body.name
    }
    var id = { _id: req.params.id };
    repository.update(data, id, function(err, groupType) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: groupType, message: messageHandler.updateSuccessful() });
    });
}

exports.deleteGrouptype = function(req, res) {
    var options = {
        _id: req.params.id
    }
    repository.delete(options, function(err) {
        if (err) res.json({ err: err, message: messageHandler.failedToDelete() });
        res.json({ message: messageHandler.deleteSuccessful() });
    });
}