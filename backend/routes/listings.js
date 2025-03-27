import express from 'express'
import Listing from '../models/Listings.js'

const router = express.Router();

//router specific middleware
router.use((req, res, next) => {
    console.log(req.path);
    next();
})

router.get('/', (req, res) => {
    res.send('All listings');
})

router.get('/:id', (req, res) => {
    res.send('Specific listing');
})

router.post('/', async (req, res) => {
    const {name, cost, date} = req.body

    try {
        const listing = await Listing.create();
    } catch(error){};
    res.send('post listing');
})

router.delete('/:id', (req, res) => {
    res.send('delete listing');
})

router.patch('/:id', (req, res) => {
    res.send('patch listing');
})

export default router;