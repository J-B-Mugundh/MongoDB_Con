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
    let books = [];

    db.collection('books')
        .find() // returns a cursor pointing to all the documents
        .sort({ author: 1 })
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books);
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the data' });
        });
});
