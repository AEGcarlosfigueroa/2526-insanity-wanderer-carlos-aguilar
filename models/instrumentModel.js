const mongoose = require('mongoose');
const { Schema } = mongoose;

const Instrument = new Schema({
    name: String,
    description: String
});

const instrumentModel = mongoose.model('instruments', Instrument);

module.exports = {
    instrumentModel
}