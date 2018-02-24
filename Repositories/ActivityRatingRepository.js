var model = require('../Models/ActivityRating');
var BaseRepository = require('../Repositories/BaseRepository');

function ActivityRatingRepository() {

}

ActivityRatingRepository.prototype = BaseRepository(model);

module.exports = new ActivityRatingRepository();