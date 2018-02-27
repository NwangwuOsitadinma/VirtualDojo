var repository = require('../Repositories/DesignationRepository');

var messageHandler = require('../Utils/MessageHandler');

exports.getDesignations = function(req, res) {
    repository.get({}, function(err, designations) {
        if (err) res.json({ er: err, message: messageHandler.resourceNotFound() });
        res.json({ data: designations, message: messageHandler.resourceFound() });
    });
}

exports.addDesignation = function(req, res) {
    var data = {
        name: req.body.name,
        description: req.body.description
    };
    repository.add(data, function(err, designation) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: data, message: messageHandler.createSuccessful() });

    });
}

exports.getDesignations = function(req, res) {
    id = req.params.id;
    repository.getById(id, function(err, designation) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: data, message: messageHandler.resourceFound });
    });
}

exports.updateDesignation = function(req, res) {
    var options = {
        name: req.body.name,
        description: req.body.description
    };
    var id = { _id: req.params.id };
    repository.getById(id, function(err, designation) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: designation, message: messageHandler.updateSuccessful() });
    });
}

exports.deleteDesignation = function(req, res) {
    var options = { _id: req.params.id };
    repository.delete(id, function(err, designation) {
        if (err) res.json({ err: err, message: messageHandler.failedToDelete() });
        res.json({ data: designation, message: messageHandler.deleteSuccessful() });
    });
}