var model = require('../Models/Activity');
var BaseRepository = require('../Repositories/BaseRepository');

function ActivityRepository() {

}

ActivityRepository.prototype = BaseRepository(model);

module.exports = new ActivityRepository();