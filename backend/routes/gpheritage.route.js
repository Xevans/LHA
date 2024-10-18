import express, { request } from 'express';
import { GPheritage } from '../models/magazines/gpheritage.model.js';

const router = express.Router();

/*// Route for creating/saving a new Grosse Pointe heritage publication
router.post('/', async (request, response) => {
    
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
});*/


// Route for retreiving all Grosse Pointe heritage publications
router.get('/', async (request, response) => {
    try {

        const gp_heritage_mags = await GPheritage.find({});

        return response.status(200).json({
            count: gp_heritage_mags.length,
            data: gp_heritage_mags,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


router.get('/issues', async (request, response) => {
    try {
        
        let query = request.query;

        const gp_heritage = await GPheritage.find(query);

        if (!gp_heritage) {
            return response.status(404).send({message: `There are no publications from ${decade.toString()}.`})
        }

        return response.status(200).json({
            data: gp_heritage,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


router.get('/low', async (request, response) => {
    try {
        const gp_heritage_low = await GPheritage.find({}).sort({publishYear : 1}).limit(1); // grabs obj with lowest year value

        if (!gp_heritage_low) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_heritage_low
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



router.get('/high', async (request, response) => {
    try {
        const gp_heritage_high = await GPheritage.find({}).sort({publishYear : -1}).limit(1); // grabs obj with highest year value

        if (!gp_heritage_high) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_heritage_high
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for retreiving a specified Grosse Pointe heritage publication
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const gp_heritage = await GPheritage.findById(id);

        if (!gp_heritage) {
            return response.status(404).send({message: "This publication does not exist."})
        }

        return response.status(200).json(gp_heritage);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for updating a GrossePointeHeritage publication
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.fileURL || !request.body.publishMonth || !publishYear) {
            return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
        }

        const { id } = request.params; // destructure ID from req params
        const result = await GPheritage.findByIdAndUpdate(id, request.body); // find document and update it. Returns the data


        if (!result) { // if no result returned
            return response.status(404).json({ message: 'Publication not found.'});
        }

        return response.status(200).send({message: 'Publication updated successfully.'});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for deleting a new Grosse Pointe heritage publication
router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await GPheritage.findByIdAndDelete(id);

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
