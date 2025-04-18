import express from 'express'
import {
    createListing,
    getAll,
    getListing,
    deleteListing,
} from '../controllers/listingsController.js'


const router = express.Router();

//router specific middleware
router.use((req, res, next) => {
    console.log(req.path);
    next();
})

router.get('/', getAll);

router.get('/:id', getListing);

//post a listing to DB
router.post('/', createListing);

router.delete('/:id', deleteListing)

//update listing isn't of high priority
/*
router.patch('/:id', (req, res) => {
    res.send('patch listing');
})
*/

export default router;