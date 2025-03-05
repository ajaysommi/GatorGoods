import express from 'express';

const app = express();

//visiting initial splash page
app.get("/", (req, res) => {
    res.send("Server is set up and ready!");
})

//current bug, url needs to be http instead of https (cant establish secure connection)
app.listen(3000, () => {
    //test message to console indicating connection with port successful.
    console.log("Test: server started at https://localhost:3000.");

})
