var repository = require('../Repositories/ActivityRatingRepository');

var messageHandler = require('../Utils/MessageHandler');

exports.getActivityRatings = function(req, res) {
    repository.get({}, function(err, activityRatings) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: activityRatings, message: messageHandler.resourceFound() });
    });
}

exports.getActivityRating = function(req, res) {
    id = req.params.id;
    repository.getById(id, function(err, activityRating) {
        if (err) res.json({ err: err, message: messageHandler.resourceNotFound() });
        res.json({ data: activityRating, message: messageHandler.resourceFound() });
    });
}

exports.updateActivityRating = function(req, res) {
    var data = {
        activityId: req.params.id,
        internId: req.body.userId,
        ratingScore: req.body.ratingScore
    }
    var id = { _id: req.params.id };
    repository.update(data, id, function(err, activityRating) {
        if (err) res.json({ err: err, message: messageHandler.failedToUpdate() });
        res.json({ data: activityRating, message: messageHandler.updateSuccessful });
    });
}

exports.addActivityRating = function(req, res) {
    var data = {
        activityId: req.params.id,
        internId: req.body.userId,
        ratingScore: req.body.ratingScore
    }
    repository.add(data, function(err, activityRating) {
        if (err) res.json({ err: err, message: messageHandler.failedToCreate() });
        res.json({ data: activityRating, message: messageHandler.createSuccessful() });
    });
}

exports.deleteActivityRating = function(req, res) {
    var options = {
        _id: req.params.id
    }
    repository.delete(options, function(err) {
        if (err) res.json({ err: err, message: messageHandler.failedToDelete() });
        res.json({ message: messageHandler.deleteSuccessful() })
    });
}