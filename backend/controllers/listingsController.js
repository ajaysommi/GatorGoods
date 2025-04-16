import Listing from '../models/Listings.js'

//get all
const getAll = async (req, res) => {
    try {
        const listings = await Listing.find({}).sort({createdAt: -1});

        res.status(200).json(listings);
    } catch(error){
        res.status(400).json({error: 'getAll failed'});
    }
}

//get single
const getListing = async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(400).json({error: 'invalid ID'});
        }

        const listing = await Listing.findById(req.params.id);

        if(!listing){
            return res.status(404).json({error: 'listing not found'});
        }

        res.status(200).json(listing);

    } catch(error){
        res.status(400).json({error: 'getListing failed'});
    }
}

//create listing
const createListing = async (req, res) => {
    const {name, description, cost, date} = req.body

    try {
        const listing = await Listing.create({name, description, cost, date});
        res.status(201).json(listing);
    } catch(error){
        res.status(400).json({error: 'create failed'});
    };
}

//delete listing
const deleteListing = async (req, res) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({error: 'listing does not exist'});
        }

        const deletedListing = await Listing.findOneAndDelete({_id: req.params.id});
        res.status(200).json({
            msg: 'Listing deleted:',
            listing: deletedListing,
        });
    } catch(error){
        res.status(400).json({error: 'deleteListing failed'});
    }
}

export {
    createListing,
    getAll,
    getListing,
    deleteListing,
};