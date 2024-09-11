import express, { request } from 'express';
import { GPcivic } from '../models/newspapers/gpcivic.model.js';

const router = express.Router();

// Route for creating/saving a new Grosse Pointe News publication
router.post('/', async (request, response) => {
    try {

        const data = request.body;

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


// Route for retreiving all Grosse Pointe civic publications
router.get('/', async (request, response) => {
    try {

        const gp_civics = await GPcivic.find({});

        return response.status(200).json({
            count: gp_civics.length,
            data: gp_civics,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for retreiving all Grosse Pointe civic publications given a query (decade)
router.get('/issues', async (request, response) => {
    try {
        
        let query = request.query;

        const gp_civics = await GPcivic.find(query);

        if (!gp_civics) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_civics,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



router.get('/low', async (request, response) => {
    try {
        const gp_civic_low = await GPcivic.find({}).sort({publishYear : 1}).limit(1); // grabs obj with lowest year value


        if (!gp_civic_low) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_civic_low
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.get('/high', async (request, response) => {
    try {
        const gp_civic_high = await GPcivic.find({}).sort({publishYear : -1}).limit(1); // grabs obj with largest year value


        if (!gp_civic_high) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_civic_high
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for retreiving a specified Grosse Pointe civic publication
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const gp_civic = await GPcivic.findById(id);

        if (!gp_civic) {
            return response.status(404).send({message: "This publication does not exist."})
        }

        return response.status(200).json(gp_civic);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for updating a GrossePointeCivic publication
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.fileURL || !request.body.publishMonth || !publishYear) {
            return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
        }

        const { id } = request.params; // destructure ID from req params
        const result = await GPcivic.findByIdAndUpdate(id, request.body); // find document and update it. Returns the data


        if (!result) { // if no result returned
            return response.status(404).json({ message: 'Publication not found.'});
        }

        return response.status(200).send({message: 'Publication updated successfully.'});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for deleting a new Grosse Pointe civic publication
router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await GPcivic.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Publication not found.'});
        }

        return response.status(200).send({message: 'Publication Deleted Successfully.'});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


export default router;
