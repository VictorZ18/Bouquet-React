const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDB = async (URL) => {
    try{
        const DB_OPTIONS = {
            dbName: 'Bouquet',
        }
        await mongoose.connect(URL, DB_OPTIONS);
        console.log('Connected Successfully..');
        console.log(URL, DB_OPTIONS);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;
