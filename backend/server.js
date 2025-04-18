import express from 'express';
import { MongoURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors'
import listing_routes from './routes/listings.js'

const app = express();

//middleware for logging messages in console
app.use(express.json()); //gets data from request
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


app.use(cors({
    origin: 'http://localhost:5173',  // Your frontend URL
    methods: ['GET', 'POST', 'DELETE', 'PATCH'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));

//visiting initial splash page
app.get("/", (req, res) => {
    try {
        res.send("Server is set up and ready!");
    } catch (error) {
        console.error("Server not set up. Error: ", error);
    }
})

//listing routes
app.use('/api/listings', listing_routes);


mongoose.connect(MongoURL)
    .then(() => {
        console.log("Successfully connected to database.");
        app.listen(3000, () => {
            //test message to console indicating connection with port successful.
            console.log("Test: server started at http://localhost:3000.");
        
        }) 
    })
    .catch((error) => {
        console.log(error);
    });