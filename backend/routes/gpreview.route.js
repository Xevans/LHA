import express, { request } from 'express';
import { GPreview } from '../models/newspapers/gpreview.model.js'; 

const router = express.Router();

// Route for creating/saving a new Grosse Pointe Review publication
router.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.fileURL) {
            return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
        }

        const new_gp_review = {
            title: request.body.title,
            fileURL: request.body.fileURL,
        };

        const gp_review = await GPreview.create(new_gp_review);

        return response.status(201).send(gp_review);
        
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
        if (!request.body.title || !request.body.fileURL) {
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
