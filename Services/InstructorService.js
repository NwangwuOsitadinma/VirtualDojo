var repository = require('../Repositories/InstructorRepository');
var messageHandler = require('../Utils/MessageHandler');

exports.getInstructors = function(req, res) {
    repository.get({}, function(err, instructors) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: instructors, message: messageHandler.resourceFound() });
    });
}

exports.getInstructor = function(req, res) {
    id = req.params.id;
    repository.getById(id, function(err, instructor) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: instructor, message: messageHandler.resourceFound() });
    });
}

exports.addInstructor = function(req, res) {
    var data = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
    }
    repository.get(data, function(err, instructor) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: instructor, message: messageHandler.createSuccessful() });
    });
}

exports.updateInstructor = function(req, res) {
    var data = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        dob: req.body.dob,
        phone: req.body.phone,
        address: req.body.address,
    }
    repository.update(data, function(err, instructor) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: instructor, message: messageHandler.updateSuccessful() });
    });
}