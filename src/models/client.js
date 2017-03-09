var crypto = require('crypto'),
    mongoose = require('../libs/mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

// Client
var Client = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    clientId: {
        type: String,
        unique: true,
        required: true
    },
    clientSecret: {
        type: String,
        required: true
    }
});

var ClientModel = mongoose.model('Client', Client);

module.exports = ClientModel;