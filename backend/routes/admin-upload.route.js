import express, { request } from 'express';
import { GPnews } from '../models/newspapers/gpnews.model.js';
import { GPcivic } from '../models/newspapers/gpcivic.model.js';
import { GPheritage } from '../models/magazines/gpheritage.model.js';
import { GPmagazine } from '../models/magazines/gpmagazine.model.js';
import { GPreview } from '../models/newspapers/gpreview.model.js';
import { Obituary } from '../models/obituaries/obituary.model.js';

// this route is solely deticated to uploads of publications from an admin facing app that is in no way bound to the LHA app.

const router = express.Router();


// Route for creating/saving a new Grosse Pointe News publication
router.post('/gp_news', async (request, response) => {
    try {

        const data = request.body;

        //validate all of the data
        data.forEach(async (element) => {

            if (!element.title || !element.fileURL || !element.publishMonth || !element.publishYear || !element.publishDay) {
                throw new Error("Send all required fields in your request.");
            }
            
            // find by id then update matching record. if no match, then create

            const gp_newspaper = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDay: element.publishDay
            };
            
            if (element._id.length > 0) {
                const update = await GPnews.findByIdAndUpdate(element._id, gp_newspaper, { new: true, runValidators: true });
            }
            else {
                const create = await GPnews.create(gp_newspaper);
            }       
            
        });
        console.log("record published")
        return response.status(201).send("Record Published.");

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
            if (
                !element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear || 
                !element.publishDecade) {
                throw new Error("Send all required fields in your request.");
            }
    
            const gp_civic = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDecade: element.publishDecade,
            };

            if (element._id.length > 0) {
                const update = await GPcivic.findByIdAndUpdate(element._id, gp_civic, { new: true, runValidators: true });
            }
            else {
                const create = await GPcivic.create(gp_civic);
            }

        })

        return response.status(201).send("Record Published.");
        
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

            if (
                !element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear ||
                !element.publishDecade) {
                throw new Error("Send all required fields in your request.");
            };
    
            const gp_heritage = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDecade: element.publishDecade,
            };
    
            if (element._id.length > 0) {
                const update = await GPheritage.findByIdAndUpdate(element._id, gp_heritage, { new: true, runValidators: true });
            }
            else {
                const create = await GPheritage.create(gp_heritage);
            }

        });

        return response.status(201).send("Record Published.");
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for creating/saving a new Grosse Pointe magazine publication
router.post('/gp_magazine', async (request, response) => {
    try {

        const data = request.body;

        //for each object in body, validate and create a document in mongodb
        data.forEach(async (element) => {

            if (
                !element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear || 
                !element.publishDecade) {
                    throw new Error("Send all required fields in your request.");
            }
    
            const gp_magazine = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDecade: element.publishDecade,
            };
    
            
            if (element._id.length > 0) {
                const update = await GPmagazine.findByIdAndUpdate(element._id, gp_magazine, { new: true, runValidators: true });
            }
            else {
                const create = await GPmagazine.create(gp_magazine);
            }
            
        });

        return response.status(201).send("Record Published");

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

            if (
                !element.title || 
                !element.fileURL || 
                !element.publishMonth || 
                !element.publishYear || 
                !element.publishDay) {
                throw new Error("Send all required fields in your request.");
            }
    
            const gp_review = {
                title: element.title,
                fileURL: element.fileURL,
                publishMonth: element.publishMonth,
                publishYear: element.publishYear,
                publishDay: element.publishDay,
            };

            if (element._id.length > 0) {
                const update = await GPreview.findByIdAndUpdate(element._id, gp_review, { new: true, runValidators: true });
            }
            else {
                const create = await GPreview.create(gp_review);
            }
        });
        
        return response.status(201).send("Record Published");
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for creating/saving a new Obituary record
router.post('/obituary', async (request, response) => {
    try {

        const data = request.body;
        console.log(data);

        data.forEach(async (element) => {

            if (
                !element.last_name || 
                !element.first_name || 
                !element.middle_name || 
                !element.death_month || 
                !element.death_day || 
                !element.death_year || 
                !element.printed_month || 
                !element.printed_day || 
                !element.printed_year || 
                !element.publisher_name ||
                !element.page_number ) {
                throw new Error("Send all required fields in your request.");
            }
    
            const obit = {
                lastName:element.last_name, 
                firstName:element.first_name, 
                middleName:element.middle_name, 
                deathYear:element.death_year, 
                deathMonth:element.death_month, 
                deathDay:element.death_day, 
                printYear:element.printed_year, 
                printMonth:element.printed_month, 
                printDay:element.printed_day, 
                publicationName:element.publisher_name,
                pageNumber:element.page_number
            };

            if (element._id.length > 0) {
                const update = await Obituary.findByIdAndUpdate(element._id, obit, { new: true, runValidators: true });
            }
            else {
                const create = await Obituary.create(obit);
            }
        });
        
        return response.status(201).send("Record Published.");
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



export default router;