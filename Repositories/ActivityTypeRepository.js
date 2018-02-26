var model = require('../Models/ActivityType');
var BaseRepository = require('../Repositories/BaseRepository');

function ActivityTypeRepository() {

}

ActivityTypeRepository.prototype = BaseRepository(model);

module.exports = new ActivityTypeRepository();