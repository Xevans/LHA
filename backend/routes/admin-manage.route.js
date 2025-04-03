import express, { request } from 'express';
import { GPnews } from '../models/newspapers/gpnews.model.js';
import { GPcivic } from '../models/newspapers/gpcivic.model.js';
import { GPheritage } from '../models/magazines/gpheritage.model.js';
import { GPmagazine } from '../models/magazines/gpmagazine.model.js';
import { GPreview } from '../models/newspapers/gpreview.model.js';
import { Obituary } from '../models/obituaries/obituary.model.js';

// this route is solely deticated to edits and deletion of publications from an admin facing app that is in no way bound to the LHA app.

const router = express.Router();

router.delete('/obit/delete/:id', async (request, response) => {
    //Ex: http://localhost/manage/obit/delete/67eea1bc2f94b8a09f09404e
    try {

        const {id} = request.params;
        const result = await Obituary.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'No record with matching ID.'})
        }

        // return data only for dev enviornment
        return response.status(200).send({data: result})

        
    } catch (error) {
        console.error(error);
        response.status(500).send({message: error.message});
    }
});


export default router;