const questService = require("./../services/questService.js");
const playerService = require("./../services/playerService.js");
const instrumentService = require("./../services/instrumentService.js");

const daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

const eventState = {
    day_time: "morning",
    time: "5:00",
    messages: []
};

const state = "PREPARATION";

async function initialQuestSetup()
{
    const quest = {};

    eventState.messages = [];

    eventState.messages.push(state + " event starts");

    quest.events = [];

    quest.day_number = await questService.getLatestDateOfAllQuests() + 1;

    const dayWeekValue = (quest.day_number - 1) % 7;

    quest.day_week = daysOfTheWeek[dayWeekValue];

    quest.start_time = "5:00";

    const participatingPlayers = await choosePlayers();

    await assignInstrumentToPlayers(participatingPlayers);

    eventState.messages.push(state + " event ends");

    quest.events.push(eventState);

    console.log(participatingPlayers);

    quest.characters_start = JSON.parse(JSON.stringify(participatingPlayers));

    return [quest, participatingPlayers];
}

async function choosePlayers()
{

    const players = await playerService.getAllPlayers();
    
    const participatingPlayers = [];

    for(let i=0; i<3; i++)
    {
        const randomValue = chooseRandomNumber(0, players.length);
        const chosenPlayer = players[randomValue];
        participatingPlayers.push(chosenPlayer);
        players.splice(randomValue, 1);
    }

    let charactersMessage = "";

    for(let i=0; i<participatingPlayers.length; i++)
    {
        const characterName = participatingPlayers[i].name;
        let supportingString = " ";
        if(i === participatingPlayers.length - 2)
        {
            supportingString = " and "
        }
        else if(i !== participatingPlayers.length - 1)
        {
            supportingString = ", "
        };

        charactersMessage = charactersMessage + characterName + supportingString;
    }

    charactersMessage = charactersMessage + "join the team";

    eventState.messages.push(charactersMessage);

    return participatingPlayers;
}

async function assignInstrumentToPlayers(players)
{
    const instruments = await instrumentService.getAllInstruments();

    for(let i=0; i<players.length; i++)
    {
        const randomValue = chooseRandomNumber(0, instruments.length);
        const chosenInstrument = instruments[randomValue];
        players[i].equipment.instrument = chosenInstrument.name;
        instruments.splice(randomValue, 1);
    }
}

function chooseRandomNumber(min, max)
{
    const multiplyValue = max - min;
    const result = Math.floor(Math.random()*multiplyValue) + min;
    return result;
}

module.exports = {
    initialQuestSetup
}