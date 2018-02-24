var model = require('../Models/ActivityCategory');
var BaseRepository = require('../Repositories/BaseRepository');

function ActivityCategoryRepository() {

}

ActivityCategoryRepository.prototype = BaseRepository(model);

module.exports = new ActivityCategoryRepository();