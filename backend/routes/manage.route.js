import express, { request } from 'express';
import { GPnews } from '../models/newspapers/gpnews.model.js';
import { GPcivic } from '../models/newspapers/gpcivic.model.js';
import { GPheritage } from '../models/magazines/gpheritage.model.js';
import { GPmagazine } from '../models/magazines/gpmagazine.model.js';
import { GPreview } from '../models/newspapers/gpreview.model.js';

const router = express.Router();

router.delete('/gp_news/delete/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await GPnews.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Publication not found.'});
        }

        const newspapers = await GPnews.find({});

        return response.status(200).send({data: newspapers});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

export default router;