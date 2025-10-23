const mongoose = require('mongoose');
const { Schema } = mongoose;

const Quest = new Schema({
    day_number: Number,
    day_week: String,
    start_time: String,
    end_time: String,
    characters: [ String ]
})

const questModel = mongoose.model('quests', Quest);

module.exports = {
    questModel
}



