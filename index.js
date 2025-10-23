const {connect, connection} = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const PORT = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require("./router.js");

dotenv.config();

const app = express();

app.use(morgan("dev"))

app.use(express.json());

app.use("/api", router.questRouter);

async function start()
{
    try
    {
        await connect(process.env.MONGODB_URL, {});
        app.listen(PORT, () => {
            console.log("App is listening on port: " + PORT);
        })
        console.log("MongoDB connected");
    }
    catch(error)
    {
        console.error("Error trying to connect to server: " + error?.message);
    }
    
};

connection.on("connected", () => {
    console.log("MongoDB connection established!", process.env.MONGODB_URL);
})

connection.on('open', () => {
  console.log("Connection to Mongo DB is open!");
});

start();