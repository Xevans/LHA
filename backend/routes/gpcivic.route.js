import express, { request } from 'express';
import { GPcivic } from '../models/newspapers/gpcivic.model.js';

const router = express.Router();

// Route for creating/saving a new Grosse Pointe News publication
router.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.fileURL || !request.body.publishMonth || !publishYear) {
            return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
        }

        const new_gp_civic = {
            title: request.body.title,
            fileURL: request.body.fileURL,
            publishMonth: request.body.publishMonth,
            publishYear: request.body.publishYear,
        };

        const gp_civic = await GPcivic.create(new_gp_civic);

        return response.status(201).send(gp_civic);
        
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
