const express = require('express')
const request = require('request-promise')
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;
const apiKey = process.env.APIKEY

console.log(apiKey)
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Amazon Scrapper API')
})

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`));