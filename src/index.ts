//import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Hike } from "./entity/Hike"
import 'dotenv/config';
import { AppDataSource } from "./data-source";

console.log(process.env);

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3050;

const hikeRepository = AppDataSource.getRepository(Hike);
app.use(cors());

app.get('/hikes', async (req, res) => {
    try {
    const hikes = await hikeRepository.find();
    
    res.send(hikes);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to retrieve hikes');
    }
})

app.listen(port, () => {
    console.log('listening');
})