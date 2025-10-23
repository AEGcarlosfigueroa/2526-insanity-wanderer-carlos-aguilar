const express = require('express');

const questController = require("./controllers/questController.js")

const questRouter = express.Router();

questRouter.get("/quest/all", questController.getAllQuests);

module.exports = {
    questRouter
}