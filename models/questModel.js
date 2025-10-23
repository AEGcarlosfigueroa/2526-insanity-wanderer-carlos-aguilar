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

