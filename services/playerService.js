const DB = require("../models/playerModel.js");

async function getAllPlayers()
{
    try
    {
        const players = await DB.playerModel.find();
        return(players);
    }
    catch(error)
    {
        throw error;
    }
}

module.exports = {
    getAllPlayers
}