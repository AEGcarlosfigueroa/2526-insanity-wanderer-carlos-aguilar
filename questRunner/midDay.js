const dice = require("./dice.js");

const eventState = {
    day_time: "afternoon",
    time: "12:00",
    messages: []
}

const eventTypes = ["CROSSING", "STAMINA LOSS", "STOP"];

function executeMiddayEvent(quest, characters)
{
    eventState.messages = [];
    eventState.messages.push(eventTypes[0] + " event starts");

    let timeSince12 = 0;
    const distanceToTravel = dice.rollDice(1, 10);

    eventState.messages.push("The team walks " + distanceToTravel + " kms");

    timeSince12 += distanceToTravel;
    const [timeToTravel, slowestPlayerName, slowestPlayerWeight] = determineTimeToTravel(distanceToTravel, characters);
    eventState.messages.push("The slowest member is " + slowestPlayerName + " with a weight of " + slowestPlayerWeight + "kg");
    eventState.messages.push("Time spent: " + timeToTravel + " minutes");
    eventState.messages.push("Current Time Is: " + getTimeString(timeSince12));

    eventState.messages.push(eventTypes[0] + " event ends");
    eventState.messages.push(eventTypes[1] + " event starts");

    const staminaLost = determineStaminaLost(timeToTravel, characters);

    eventState.messages.push("Each member loses " + staminaLost + " stamina");

    eventState.messages.push(eventTypes[1] + " event ends");
    eventState.messages.push(eventTypes[2] + " event starts");
    eventState.messages.push("The team makes a stop of 5 hours");

    timeSince12 += (5*60);

    eventState.messages.push("Current Time Is: " + getTimeString(timeSince12));
    eventState.messages.push(eventTypes[2] + " event ends");

    quest.events.push(eventState);

    return timeSince12;
}

function getTimeString(timeSince12)
{
    const startHour = 12;
    const startMinutes = 0;

    let hoursToAdd = Math.floor(timeSince12 / 60);
    const minutesToAdd = timeSince12 % 60;

    let minutes = startMinutes + minutesToAdd;

    if(minutes >= 60)
    {
        hoursToAdd++;
        minutes -= 60;
    }

    let minutesString = "";

    if(minutes < 10)
    {
        minutesString = (`0${minutes}`);
    }
    else
    {
        minutesString = (`${minutes}`);
    }

    let hourString = `${startHour + hoursToAdd}`;

    const hourToReturn = hourString + ":" + minutesString;

    return hourToReturn;
}

function determineStaminaLost(timeToTravel, characters)
{
    const staminaLost = timeToTravel / 30;

    for(let i=0; i<characters.length; i++)
    {
        characters[i].stamina -= staminaLost;
    }
    return Math.round(staminaLost);
}

function determineTimeToTravel(distance, characters)
{
    let timeToTravel = 0;

    let slowestPlayerName = "";

    let slowestPlayerWeight = 0;

    for(let i=0; i<characters.length; i++)
    {
        const playerTime = distance * characters[i].equipment.weight;
        if(playerTime >= timeToTravel)
        {
            timeToTravel = playerTime;
            slowestPlayerName = characters[i].name;
            slowestPlayerWeight = characters[i].equipment.weight;
        }
    }

    timeToTravel = Math.round(timeToTravel);

    return [timeToTravel, slowestPlayerName, slowestPlayerWeight];
}

module.exports = {
    executeMiddayEvent
}