const mongoose = require('mongoose');
const { Schema } = mongoose;
const player = require("./playerModel.js");

const Event = new Schema({
    day_time : String,
    time : String,
    messages : [ String ]
})

const Quest = new Schema({
    day_number: Number,
    day_week: String,
    start_time: String,
    end_time: String,
    characters_start: [ player.Player ],
    events: [ Event ],
    characters_end: [ player.Player ]
})

const questModel = mongoose.model('quests', Quest);

module.exports = {
    questModel
}



