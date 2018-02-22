var model = require('../Models/Sample');
var BaseRepository = require("../Repositories/BaseRepository");

function SampleRepository() {

}

SampleRepository.prototype = BaseRepository(model);

module.exports = new SampleRepository();