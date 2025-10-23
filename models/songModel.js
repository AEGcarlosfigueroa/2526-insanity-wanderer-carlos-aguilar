const mongoose = require('mongoose');
const { Schema } = mongoose;

const Song = new Schema({
    name: String,
    description: String,
    time: Number,
    instruments: [ String ]
})

const songModel = mongoose.model('songs', Song);

module.exports = {
    songModel
}