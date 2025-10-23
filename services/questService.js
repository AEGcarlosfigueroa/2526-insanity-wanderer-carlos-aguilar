const DB = require("../models/questModel.js")

async function getAllQuests()
{
    try
    {
        console.log("looking for quests...");
        const quests = await DB.questModel.find();
        console.log(quests);
        return quests;
    }
    catch(error)
    {
        throw error;
    }
}

module.exports = {
    getAllQuests
}