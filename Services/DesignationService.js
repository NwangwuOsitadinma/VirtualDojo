var repository = require('../Repositories/DesignationRepository');

var messageHandler = require('../Utils/MessageHandler');

exports.getDesignation = function(req, res) {
    repository.get({}, function(err, designations) {
        if (err) res.json({ er: err, message: messageHandler.resourceNotFound() });
        res.json({ data: designations, message: messageHandler.resourceFound() });
    });
}