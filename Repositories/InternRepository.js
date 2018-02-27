var model = require('../Models/Intern');
var BaseRepository = require('../Repositories/BaseRepository');

function InternRepository() {

}

InternRepository.prototype = BaseRepository(model);

module.exports = new InternRepository();