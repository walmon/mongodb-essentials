'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BuildingSchema = new Schema({
    name: String,
    info: String,
    pos: { lat: Number,
        lon: Number
    },
    floors: [String]
});

module.exports = mongoose.model('Building', BuildingSchema);