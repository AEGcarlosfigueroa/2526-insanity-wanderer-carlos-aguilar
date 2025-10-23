const questService = require("./../services/questService.js")

async function getAllQuests(req, res)
{
    try
    {
        const allQuests = await questService.getAllQuests();
        if(allQuests.length === 0)
        {
            console.log("no quests found!");
            return res.status(404).send({ message: 'No quests found!' });
        }
        return res.status(200).send({quests: allQuests});
    }
    catch(error)
    {
        return res.status(error?.status || 500).send({ 
            status: "FAILED",
            message: "Request failed",
            data: { error: error?.message || error }
        });
    }
}

module.exports = {
    getAllQuests
}