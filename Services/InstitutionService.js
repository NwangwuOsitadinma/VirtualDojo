var repository = require('../Repositories/InstitutionRepository');
var messageHandler = require('../Utils/MessageHandler');

exports.getInstitutions = function(req, res) {
    repository.get({}, function(err, institutions) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: institution, message: messageHandler.resourceFound() });

    });
}

exports.getInstitution = function(req, res) {
    id = req.params.id;
    repository.getById(id, function(err, institution) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: institution, message: messageHandler.resourceFound() });
    });
}

exports.addInstitution = function(req, res) {
    var data = {
        name: req.body.name
    };
    repository.add(data, id, function(err, institution) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: institution, message: messageHandler.createSuccessful() });
    });

}
exports.updateInstitution = function(req, res) {
    var data = {
        name: req.body.name
    };
    var id = { _id: req.params.id };
    repository.update(data, id, function(err, institution) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate });
        res.json({ data: institution, message: messageHandler.updateSuccessful() });
    });

}

exports.deleteInstitution = function(req, res) {
    var options = {
        _id: req.params.id
    }
    repo.delete(options, function(err) {
        if (err) res.json({ error: err, message: messageHandler.failedToDelete() });
        res.json({ message: messageHandler.deleteSuccessful() });
    })
}