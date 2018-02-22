var mongoose = require('mongoose');
var intern = require('../Models/Intern');
var instructor = require('../Models/Instructor');
var UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: String,

    userProfile: () => {
        if (this.userType == 'Instructor') {
            return instructor.find({ user: this._id }, function(err, profile) {
                if (err) return err;

                return profile;
            });
        } else if (this.userType == 'Intern') {
            return intern.find({ user: this._id }, function(err, profile) {
                if (err) return err;
                return profile;
            });
        }

    }
});

module.exports = mongoose.model('User', UserSchema);