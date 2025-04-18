import mongoose from 'mongoose'

const listing_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
}, {timestamps: true}
)

const Listing = mongoose.model('Listing', listing_schema);

export default Listing; 