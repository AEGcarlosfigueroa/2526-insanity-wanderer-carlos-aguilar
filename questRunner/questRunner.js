const morning = require("./morning.js");
const midday = require("./midDay.js");
const nightfall = require("./nightFall.js");

async function runQuest()
{
    try
    {
        const [quest, players] = await morning.initialQuestSetup();

        let timeSince12 = midday.executeMiddayEvent(quest, players);

        console.log(quest);

        timeSince12 = nightfall.executeNightfallEvent(quest, timeSince12);

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