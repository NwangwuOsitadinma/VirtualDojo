var model = require('../Models/Institution');
var BaseRepository = require('../Repositories/BaseRepository');

function InstitutionRepository() {

}

InstitutionRepository.prototype = BaseRepository(model);

module.exports = new InstitutionRepository();