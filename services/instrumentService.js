const DB = require("./../models/instrumentModel.js");

async function getAllInstruments()
{
    try
    {
        const instruments = await DB.instrumentModel.find();
        return(instruments);
    }
    catch(error)
    {
        throw error;
    }
}

module.exports = {
    getAllInstruments
}