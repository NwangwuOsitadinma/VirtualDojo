var model = require('../Models/Designation');
var BaseRepository = require('../Repositories/BaseRepository');

function DesignationRepository() {

}

DesignationRepository.prototype = BaseRepository(model);

module.exports = new DesignationRepository();