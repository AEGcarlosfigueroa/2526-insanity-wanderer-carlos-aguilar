const morning = require("./morning.js");
const midday = require("./midDay.js");

async function runQuest()
{
    try
    {
        const [quest, players] = await morning.initialQuestSetup();

        let timeSince12 = midday.executeMiddayEvent(quest, players);

        console.log(quest);

        quest.characters_end = players;

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