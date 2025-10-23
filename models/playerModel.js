const mongoose = require('mongoose');
const { Schema } = mongoose;

const Pouch = new Schema({
    coins: Number
})

const Equipment = new Schema({
    instrument: String,
    pouch: Pouch,
    weight: Number
})

const Player = new Schema({
    name: String,
    occupation: String,
    description: String,
    stamina: Number,
    favourite_drink: String,
    equipment: Equipment
})

const playerModel = mongoose.model('players', Player);

module.exports = {
    playerModel,
    Player
}