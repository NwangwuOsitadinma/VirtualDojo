var model = require('../Models/Group');
var BaseRepository = require('../Repositories/BaseRepository');

function GroupRepository() {

}

GroupRepository.prototype = BaseRepository(model);

module.exports = new GroupRepository();