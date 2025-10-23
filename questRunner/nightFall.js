
const eventState = {
    day_time: "nightfall",
    time: "",
    messages: []
}

const eventType = "BONFIRE";

function executeNightfallEvent(quest, timeSince12)
{
    eventState.messages = [];

    eventState.time = getTimeString(timeSince12);

    eventState.messages.push(eventType + " event starts");
    eventState.messages.push("The team spends 1 hour recollecting materials");
    eventState.messages.push("The team lights the bonfire");

    timeSince12 += 60;

    eventState.messages.push("Current time is: " + getTimeString(timeSince12));
    eventState.messages.push(eventType + " event ends");

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

module.exports = {
    executeNightfallEvent
}