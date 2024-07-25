import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import GPnewsRouter from "./routes/gpnewsRoute.js";

const app = express();
// middleware for parsing request body
// i.e. will assist in reading json data from requests bodies
app.use(express.json());

dotenv.config(); // access the .env file


// middleware for handling CORS policy
// Cors is needed to 1: allow acess to the db from another domain and 2: prevent clients from doing whatever operations they want from anywhere

// Method 1: allow all origins with default of cors(*)
//app.use(cors());



//Route '/' send server message
app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to the Express backend');
});


// routes
app.use('/gpnews', GPnewsRouter);


// mongo DB connection
mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('App connected to database');
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to port: ${process.env.PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });