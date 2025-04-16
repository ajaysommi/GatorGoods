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
    }
}, {timestamps: true}
)

export default listing_schema;