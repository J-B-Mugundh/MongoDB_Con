const { MongoClient } = require('mongodb')

let dbConnection
// Mongo Atlas
let uri = 'mongodb+srv://mugundhjb:mass_123@cluster0.pfmciqd.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb : (cb) => { // cb => callback function that runs after the connection is established
        // MongoClient.connect('mongodb://127.0.0.1:27017/bookstore') // localhost
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb : () => dbConnection
}