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

async function getLatestDateOfAllQuests()
{
    try
    {
        const quests = await DB.questModel.find();
        const latestDay = quests.reduce((obj, acc) => {
            if(obj.day_number >= acc)
            {
                acc = obj.day_number
            }
        }, 0);
        return latestDay

    }
    catch(error)
    {
        throw error;
    }
}

async function insertNewQuest(quest)
{
    try
    {
        const newQuest = await DB.questModel.insertOne(quest);
        return newQuest;
    }
    catch(error)
    {
        throw error;
    }
}

module.exports = {
    getAllQuests,
    insertNewQuest,
    getLatestDateOfAllQuests
}