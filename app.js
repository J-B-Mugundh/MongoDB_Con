const express = require('express');
const {connectToDb, getDb} = require('./db')
// init app & middleware
const app = express();

let db // variable to interact with db

// db connection
connectToDb((err) => {
    if(!err){
        app.listen(3000, () => {
            console.log("App listening on port 3000")
        })
        db = getDb()
    }
})


// routes
app.get('/books', (req, res) => {

    res.json({msg: "Welcome to api"})
})