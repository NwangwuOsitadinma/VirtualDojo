var repo = require('../Repositories/SampleRepository');
var model = require('../Models/Sample');

exports.getSamples = (req, res) => {
    repo.get({}, (err, data) => {
        if (err) res.json({ message: 'error' });
        res.json(data)
    });


}

exports.addSample = (req, res) => {
    var data = { name: req.body.name };
    repo.add(data, (err, data) => {
        if (err) res.json({ err })
        res.json({ message: 'The Sample was added successfully', data: data });
    });
}