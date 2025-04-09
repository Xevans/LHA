import express, { request } from 'express';
import { Obituary } from '../models/obituaries/obituary.model.js';
    

const router = express.Router();


// retrieve all documents
router.get('/', async (request, response) => {
    try {
        const obits = await Obituary.find({});

        if (obits.length < 1) {
            return response.status(404).send({message: 'No records found.'})
        }

        if (obits.length > 2) {
            obits.sort({ deathYear: -1 })
            .then((docs) => {

                return response.status(200).json(
                    {
                        count: obits.length,
                        data: obits
                    }
                ); 
            });
        }
        else {
            return response.status(200).json(
                {
                    count: obits.length,
                    data: obits
                }
            ); 
        }   
        
    } catch (error) {
        console.error(error.message);
        response.status(500).send({message: error.message});
    }
});


// retrieve records with matching last name
router.get('/last_name', async (request, response) => {
    
    try {
        
        const query = request.query; // /Last_name?lastName=Doe

        const obits = Obituary.find(query);

        if (obits.length < 1) {
            return response.status(404).send({message: 'No records found.'})
        }

        obits.sort({ deathYear: -1 })
        .then( (docs) => { // parent method passes return value to the then method as a callback that we reference as docs
            
            return response.status(200).send(
                {
                    count: docs.length,
                    data: docs
                });
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).send({message: error.message});
    }
});


// retrieve with matching middle name
router.get('/middle_name', async (request, response) => {

    try {
        
        const query = request.query;

        const obits = Obituary.find(query);

        if (obits.length < 1) {
            return response.status(404).send({message: 'No records found.'})
        }

        obits.sort({ deathYear: -1 })
        .then( (docs) => { // parent method passes return value to the then method as a callback that we reference as docs
            
            return response.status(200).send(
                {
                    count: docs.length,
                    data: docs
                });
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).send({message: error.message});
    }
    
});


// retrieve with matching last name
router.get('/first_name', async (request, response) => {

    try {
        
        const query = request.query;

        const obits = Obituary.find(query);

        if (obits.length < 1) {
            return response.status(404).send({message: 'No records found.'})
        }

        obits.sort({ deathYear: -1 })
        .then( (docs) => { // parent method passes return value to the then method as a callback that we reference as docs
            
            return response.status(200).send(
                {
                    count: docs.length,
                    data: docs
                });
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).send({message: error.message});
    }

});


// retrieve with matching death year
router.get('/death_year', async (request, response) => {

    try {
        
        const query = request.query; // /death_year?deathYear=2012

        const obits = Obituary.find(query);

        if (obits.length < 1) {
            return response.status(404).send({message: 'No records found.'})
        }

        obits.sort({ deathYear: -1 })
        .then( (docs) => { // parent method passes return value to the then method as a callback that we reference as docs
            
            return response.status(200).send(
                {
                    count: docs.length,
                    data: docs
                });
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).send({message: error.message});
    }

});



// retrieve with matching print year
router.get('/print_year', async (request, response) => {

    try {
        
        const query = request.query; // /print_year?printYear=2012

        Obituary.find(query)
        .sort({ printYear: -1 })
        .then( (docs) => { // parent method passes return value to the then method as a callback that we reference as docs
            
            return response.status(200).send(
                {
                    count: docs.length,
                    data: docs
                });
        });

    } catch (error) {
        console.error(error.message);
        response.status(500).send({message: error.message});
    }

});






export default router;