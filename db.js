const {MongoClient} = require('mongodb')

let dbConnection

module.exports = {
    connectToDb : (cb) => { // cb => callback function that runs after the connection is established
        MongoClient.connect('mongpdb://localhost:27017/bookstore')
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