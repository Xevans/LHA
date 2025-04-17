import express, { request } from 'express';
import { GPnews } from '../models/newspapers/gpnews.model.js';
import { GPcivic } from '../models/newspapers/gpcivic.model.js';
import { GPheritage } from '../models/magazines/gpheritage.model.js';
import { GPmagazine } from '../models/magazines/gpmagazine.model.js';
import { GPreview } from '../models/newspapers/gpreview.model.js';
import { Obituary } from '../models/obituaries/obituary.model.js';

// this route is solely deticated to edits and deletion of publications from an admin facing app.

const router = express.Router();

router.delete('/gp_news/delete/:id', async (request, response) => {
    //Ex: http://localhost/manage/obit/delete/67eea1bc2f94b8a09f09404e
    try {

        const {id} = request.params;
        const result = await GPnews.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'No record with matching ID.'})
        }

        // return status
        return response.status(200).send("Deletion Successful");

        
    } catch (error) {
        console.error(error);
        response.status(500).send({message: error.message});
    }
});


router.delete('/gp_heritage/delete/:id', async (request, response) => {
    //Ex: http://localhost/manage/obit/delete/67eea1bc2f94b8a09f09404e
    try {

        const {id} = request.params;
        const result = await GPheritage.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'No record with matching ID.'})
        }

        // return status
        return response.status(200).send("Deletion Successful");

        
    } catch (error) {
        console.error(error);
        response.status(500).send({message: error.message});
    }
});


router.delete('/gp_civic/delete/:id', async (request, response) => {
    //Ex: http://localhost/manage/obit/delete/67eea1bc2f94b8a09f09404e
    try {

        const {id} = request.params;
        const result = await GPcivic.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'No record with matching ID.'})
        }

        // return status
        return response.status(200).send("Deletion Successful");

        
    } catch (error) {
        console.error(error);
        response.status(500).send({message: error.message});
    }
});


router.delete('/gp_magazine/delete/:id', async (request, response) => {
    //Ex: http://localhost/manage/obit/delete/67eea1bc2f94b8a09f09404e
    try {

        const {id} = request.params;
        const result = await GPmagazine.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'No record with matching ID.'})
        }

        // return status
        return response.status(200).send("Deletion Successful");

        
    } catch (error) {
        console.error(error);
        response.status(500).send({message: error.message});
    }
});



router.delete('/gp_review/delete/:id', async (request, response) => {
    //Ex: http://localhost/manage/obit/delete/67eea1bc2f94b8a09f09404e
    try {

        const {id} = request.params;
        const result = await GPreview.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'No record with matching ID.'})
        }

        // return status
        return response.status(200).send("Deletion Successful");

        
    } catch (error) {
        console.error(error);
        response.status(500).send({message: error.message});
    }
});



router.delete('/obituary/delete/:id', async (request, response) => {
    //Ex: http://localhost/manage/obit/delete/67eea1bc2f94b8a09f09404e
    try {

        const {id} = request.params;
        const result = await Obituary.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'No record with matching ID.'})
        }

        // return status
        return response.status(200).send("Deletion Successful");

        
    } catch (error) {
        console.error(error);
        response.status(500).send({message: error.message});
    }
});


export default router;