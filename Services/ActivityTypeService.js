var repository = require('../Repositories/ActivityTypeRepository');

exports.getActivityType = function(req, res) {
    repository.get({}, (err, data) => {
        if (err) res.json({ err: err, message: 'something went wrong and the resource could not be found' });
        res.json({ data: data, message: 'the resource was retreived successfully' })
    });
}

exports.addActivityType = function(req, res) {
    var data = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        activityCategory: req.body.activityCategory
    }

    repository.add(data, function(err, data) {
        if (err) res.json({ err: err, message: 'Something went wrong and the resource could not be created' });
        res.json({ data: data, message: 'the resource was retrieved successfully' });
    });
}

exports.updateActivityType = function(req, res) {
    var data = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        activityCategory: req.body.activityCategory
    }
    var id = {
        _id: req.params.id
    }
    repository.update(data, id, function(err, data) {
        if (err) res.json({ err: err, message: 'Something went wrong and the resource could not be updated' });
        res.json({ data: data, message: 'the resource was updated successfully' });
    });
}
exports.deleteActivityCategory = function(req, res) {
    var options = {
        _id: req.params.id
    }
    repository.delete(options, function(err, data) {
        if (err) res.json({ error: err, message: 'Something went wrong and the resource could not be deleted' });
        res.json({ data: data, message: 'the resource was deleted successfully' });
    })
}