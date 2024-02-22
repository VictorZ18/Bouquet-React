const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDB = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS = {
            dbName: 'Bouquet',
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Connected Successfully..');
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;