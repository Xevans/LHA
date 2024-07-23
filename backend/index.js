import express from "express";
import { PORT } from "./config.js";
import mongoose from 'mongoose';

const app = express();

// middleware for parsing request body
// i.e. will assist in reading json data from requests bodies
app.use(express.json());


// middleware for handling CORS policy
// Cors is needed to 1 allow acess to the db from another domain and 2: prevent clients from doing whatever operations they want from anywhere

// Method 1: allow all origins with default of cors(*)
app.use(cors());

//Route '/' send server message
app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to the Express backend');
});


// routes


// mongo DB connection