var model = require('../Models/Instructor');
var BaseRepository = require('../Repositories/BaseRepository');

function InstructorRepository() {

}

InstructorRepository.prototype = BaseRepository(model);

module.exports = new InstructorRepository();