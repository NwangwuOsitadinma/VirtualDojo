var model = require('../Models/GroupType');
var BaseRepository = require('../Repositories/BaseRepository');

function GroupTypeRepository() {

}

GroupTypeRepository.prototype = BaseRepository(model);

module.exports = new GroupTypeRepository();