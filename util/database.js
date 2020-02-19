const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let _db;
//Connection with mongodb
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://paing:paing@@@111@cluster0-5duf1.mongodb.net/shop')
        .then(client => {
            console.log('Connected..')
            _db = client.db();
            callback();

        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}
//Access db
const getDb = () => {
    if (_db) {
        return _db;


    }
    throw 'No databasee found';
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

