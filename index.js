const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const PORT = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(morgan("dev"))

app.use(express.json());

async function start()
{
    try
    {
        await mongoose.connect(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log("App is listening on port: " + PORT);
        })
        console.log("MongoDB connected");
    }
    catch(error)
    {
        console.error("Error trying to connect to server: " + error?.message);
    }
    
}

start();