import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import GPnewsRouter from "./routes/gpnews.route.js";
import GPreviewRouter from "./routes/gpreview.route.js";
import GPcivicRouter from "./routes/gpcivic.route.js";
import GPheritageRouter from "./routes/gpheritage.route.js";
import GPmagazineRouter from "./routes/gpmagazine.route.js"

const app = express();
// middleware for parsing request body
// i.e. will assist in reading json data from requests bodies
app.use(express.json());

dotenv.config(); // access the .env file


// middleware for handling CORS policy
// Cors is needed to 1: allow acess to the db from another domain and 2: prevent clients from doing whatever operations they want from anywhere

// Method 1: allow all origins with default of cors(*)

const corsOptions = {
origin: 'http://localhost:3001', // until front end has domain name, local host is used.// set to 3000 for testing
optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


//Route '/' send server message
app.get('/', cors(corsOptions), (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to the Express backend');
});


// routes
app.use('/gp_news', cors(corsOptions), GPnewsRouter);
app.use('/gp_review', cors(corsOptions), GPreviewRouter);
app.use('/gp_civic', cors(corsOptions), GPcivicRouter);
app.use('/gp_heritage', cors(corsOptions), GPheritageRouter);
app.use('/gp_magazine', cors(corsOptions), GPmagazineRouter);


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