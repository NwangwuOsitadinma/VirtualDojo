var repository = require('../Repositories/InternRepository');
var messageHandler = require('../Utils/MessageHandler');

exports.getInterns = function(req, res) {
    repository.get({}, function(err, interns) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: interns, message: messageHandler.resourceFound() });
    });
}

exports.getIntern = function(req, res) {
    var id = req.params.id;
    repository.getById(id, function(err, intern) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: intern, message: messageHandler.resourceFound() });
    });
}

exports.addIntern = function(req, res) {
    var data = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
    }
    repository.add(data, function(err, intern) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() })
        res.json({ data: intern, message: messageHandler.createSuccessful() });

    });

}


exports.updateIntern = function(req, res) {
    var data = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
    }
    var id = { _id: req.params.id };
    repository.add(data, function(err, intern) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: intern, message: messageHandler.updateSuccessful() });
    });
}

exports.deleteIntern = function(req, res) {
    var options = { _id: req.params.id };
    repository.delete(options, function(err) {
        if (err) res.json({ err: err, message: messageHandler.failedToDelete() });
        res.json({ message: messageHandler.deleteSuccessful() });
    });
}