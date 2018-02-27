var model = require('../Models/User');
var BaseRepository = ('../Repositories/BaseRepository');

function UserRepository() {

}

UserRepository.prototype = BaseRepository(model);

module.exports = new UserRepository();