import express, { request } from 'express';
import { GPnews } from '../models/newspapers/gpnews.model.js';
import { GPcivic } from '../models/newspapers/gpcivic.model.js';
import { GPheritage } from '../models/magazines/gpheritage.model.js';
import { GPmagazine } from '../models/magazines/gpmagazine.model.js';
import { GPreview } from '../models/newspapers/gpreview.model.js';

// this route is solely deticated to uploads of publications from an admin facing app that is in no way bound to the LHA app.

const router = express.Router();


// Route for creating/saving a new Grosse Pointe News publication
router.post('/gp_news', async (request, response) => {
    try {

        const data = request.body;

        //console.log(data);

        //validate all of the data
        data.forEach(async (element) => {

           // console.log(element)

            

            if (!element.title || !element.fileURL || !element.publishMonth || !element.publishYear || !element.publishDay) {
                return response.status(400).send({message: 'Send all required fields in your request (title, fileURL, publishYear, publishMonth, publishDay).'});
            }
    
            const new_gp_newspaper = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDay: element.publishDay,
            };
    
            const gp_newspaper = await GPnews.create(new_gp_newspaper);
            
        });

        // send data to db
        return response.status(201).send(data);

        
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for creating/saving a new Grosse Pointe Civic publication
router.post('/gp_civic', async (request, response) => {
    
    const data = request.body;

    try {

        data.forEach(async (element) => {
            if (!element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear || 
                !element.publishDecade) {
                return response.status(400).send({message: 'Send all required fields in your request (title, fileURL, publishMonth...).'});
            }
    
            const new_gp_civic = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDecade: element.publishDecade,
            };

            const gp_civic = await GPcivic.create(new_gp_civic);

        })

        // sed data to db
        return response.status(201).send(data);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for creating/saving a new Grosse Pointe heritage publication
router.post('/gp_heritage', async (request, response) => {
    
    const data = request.body;
    
    try {   

        data.forEach(async (element) => {

            if (!element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear ||
                !element.publishDecade) {
                return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
            };
    
            const new_gp_heritage = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDecade: element.publishDecade,
            };
    
            const gp_heritage = await GPheritage.create(new_gp_heritage);

        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

    return response.status(201).send(data);
});


// Route for creating/saving a new Grosse Pointe magazine publication
router.post('/gp_magazine', async (request, response) => {
    try {

        const data = request.body;

        //for each object in body, validate and create a document in mongodb
        data.forEach(async (element) => {

            if (!element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear || 
                !element.publishDecade) {
                return response.status(400).send({message: 'Send all required fields in your request (title, fileURL, publishMonth, publishYear).'});
            }
    
            const new_gp_magazine = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDecade: element.publishDecade,
            };
    
            const gp_magazine = await GPmagazine.create(new_gp_magazine);
            
        });

        // send data back to client and comfirm reciept
        return response.status(201).send(data);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for creating/saving a new Grosse Pointe Review publication
router.post('/gp_review', async (request, response) => {
    try {

        const data = request.body;

        data.forEach(async (element) => {

            if (!element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear || 
                !element.publishDay) {
                return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
            }
    
            const new_gp_review = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDay: element.publishDay,
            };
    
            const gp_review = await GPreview.create(new_gp_review);
        
        
        });
        

        return response.status(201).send(data);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


export default router;