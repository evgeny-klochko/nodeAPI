var crypto = require('crypto'),
    mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema,
    async = require('async');


var User = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

var UserModel = mongoose.model('User', User);

module.exports = UserModel;