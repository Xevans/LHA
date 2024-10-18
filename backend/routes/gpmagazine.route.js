import express, { request } from 'express';
import { GPmagazine } from '../models/magazines/gpmagazine.model.js';

const router = express.Router();

/*// Route for creating/saving a new Grosse Pointe magazine publication
router.post('/', async (request, response) => {
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
});*/


// Route for retreiving all Grosse Pointe magazine publications
router.get('/', async (request, response) => {
    try {

        const gp_magazines = await GPmagazine.find({});

        return response.status(200).json({
            count: gp_magazines.length,
            data: gp_magazines,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for retreiving all Grosse Pointe News publications from a certain decade
router.get('/issues', async (request, response) => {
    try {
        
        let query = request.query;

        const gp_magazines = await GPmagazine.find(query);

        if (!gp_magazines) {
            return response.status(404).send({message: `There are no publications from ${decade.toString()}.`})
        }

        return response.status(200).json({
            data: gp_magazines,
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


router.get('/low', async (request, response) => {
    try {
        const gp_magazine_low = await GPmagazine.find({}).sort({publishYear : 1}).limit(1); // grabs obj with lowest year value

        if (!gp_magazine_low) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_magazine_low
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



router.get('/high', async (request, response) => {
    try {
        const gp_magazine_high = await GPmagazine.find({}).sort({publishYear : -1}).limit(1); // grabs obj with highest year value

        if (!gp_magazine_high) {
            return response.status(404).send({message: `There are no publications from ${year.toString()}.`})
        }

        return response.status(200).json({
            data: gp_magazine_high
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


// Route for retreiving a specified Grosse Pointe magazine publication
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const gp_magazine = await GPmagazine.findById(id);

        if (!gp_magazine) {
            return response.status(404).send({message: "This publication does not exist."})
        }

        return response.status(200).json(gp_magazine);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// Route for updating a GrossePointeMagazine publication
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.fileURL || !request.body.publishMonth || !publishYear) {
            return response.status(400).send({message: 'Send all required fields in your request (title, fileURL).'});
        }

        const { id } = request.params; // destructure ID from req params
        const result = await GPmagazine.findByIdAndUpdate(id, request.body); // find document and update it. Returns the data


        if (!result) { // if no result returned
            return response.status(404).json({ message: 'Publication not found.'});
        }

        return response.status(200).send({message: 'Publication updated successfully.'});
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



// Route for deleting a new Grosse Pointe magazine publication
router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await GPmagazine.findByIdAndDelete(id);

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
