var repository = require('../Repositories/UserRepository');
var messageHandler = require('../Utils/MessageHandler');

exports.getUsers = function(req, res) {
    repository.get({}, function(err, users) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: users, message: messageHandler.resourceFound() });
    });
}

exports.getUer = function(req, res) {
    var id = req.params.id;
    repository.getById(id, function(err, user) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: user, message: messageHandler.resourceFound() });
    });
}

exports.addUser = function(req, res) {
    var data = {
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType,
    };
    repository.add(data, function(err, user) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() })
        res.json({ data: user, message: messageHandler.createSuccessful() });

    });

}


exports.updateUser = function(req, res) {
    var data = {
        email: req.body.email,
        password: req.body.password,
        userType: req.body.userType,
    }
    var id = { _id: req.params.id };
    repository.add(data, function(err, user) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: user, message: messageHandler.updateSuccessful() });
    });
}

exports.deleteUser = function(req, res) {
    var options = { _id: req.params.id };
    repository.delete(options, function(err) {
        if (err) res.json({ err: err, message: messageHandler.failedToDelete() });
        res.json({ message: messageHandler.deleteSuccessful() });
    });
}