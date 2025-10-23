const morning = require("./morning.js");

async function runQuest()
{
    try
    {
        const [quest, players] = await morning.initialQuestSetup();

        console.log(quest);

        return quest;
    }
    catch(error)
    {
        throw error;
    }
}


module.exports = {
    runQuest
}