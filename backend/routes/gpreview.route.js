import express, { request } from 'express';
import { GPreview } from '../models/newspapers/gpreview.model.js'; 

const router = express.Router();

// Route for creating/saving a new Grosse Pointe Review publication
router.post('/', async (request, response) => {
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


// Route for retreiving all Grosse Pointe Review publications
router.get('/', async (request, response) => {
    try {

        const gp_reviews = await GPreview.find({});

        return response.status(200).json({
            count: gp_reviews.length,
            data: gp_reviews,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


router.get('/issues', async (request, response) => {
    try {
        
        let query = request.query;

        const gp_review = await GPreview.find(query);

        if (!gp_review) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_review,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


router.get('/low', async (request, response) => {
    try {
        const gp_review_low = await GPreview.find({}).sort({publishYear : 1}).limit(1); // grabs obj with lowest year value

        if (!gp_review_low) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_review_low
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



router.get('/high', async (request, response) => {
    try {
        const gp_review_high = await GPreview.find({}).sort({publishYear : -1}).limit(1); // grabs obj with highest year value

        if (!gp_review_high) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_review_high
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for retreiving a specified Grosse Pointe Review publication
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const gp_review = await GPreview.findById(id);

        if (!gp_review) {
            return response.status(404).send({message: "This publication does not exist."})
        }

        return response.status(200).json(gp_review);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for updating a Grosse Pointe Review publication
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.fileURL || !request.body.publishMonth || !request.body.publishYear || !request.body.publishDay) {
            return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
        }

        const { id } = request.params; // destructure ID from req params
        const result = await GPreview.findByIdAndUpdate(id, request.body); // find document and update it. Returns the data


        if (!result) { // if no result returned
            return response.status(404).json({ message: 'Publication not found.'});
        }

        return response.status(200).send({message: 'Publication updated successfully.'});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for deleting a new Grosse Pointe Review publication
router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await GPreview.findByIdAndDelete(id);

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
