var repo = require('../Repositories/ActivityCategoryRepository');

exports.getActivityCategories = function(req, res) {
    repo.get({}, (err, data) => {
        if (err) res.json({ error: err, message: 'Something went wrong and the resource could not be retrieved' });
        res.json({ data: data, message: 'The resource was retreived successfully' });
    });

}

exports.addActivityCategory = function(req, res) {
    var data = {
        name: req.body.name,
        description: req.body.description
    }
    repo.add(data, function(err, data) {
        if (err) return res.json({ error: err, message: 'Something went wrong and the resource could not be created' });
        res.json({ data: data, message: 'The resource was created successfully' })
    });
}

exports.deleteActivityCategory = function(req, res) {
    var options = {
        _id: req.params.id
    }
    repo.delete(options, function(err, data) {
        if (err) res.json({ error: err, message: 'Something went wrong and the resource could not be deleted' });
        res.json({ data: data, message: 'the resource was deleted successfully' });
    })
}
exports.updateActivityCategory = function(req, res) {
    var options = {
        name: req.body.name,
        description: req.body.description
    }
    var id = {
        _id: req.params.id
    }
    repo.update(id, options, function(err, data) {
        if (err) res.json({ err })
        res.json({ data: data, message: 'You successfully updated this resource' });
    })
}