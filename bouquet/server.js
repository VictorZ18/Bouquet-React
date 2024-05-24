const express = require('express');
const connectDB = require('./src/backend/db/connectdb.js');
const web = require('./src/backend/routes/web.js');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
const User = require('./src/backend/models/user.js');
const Categories = require('./src/backend/models/categories.js');
const Suppliers = require('./src/backend/models/suppliers.js');
const Reviews = require('./src/backend/models/reviews.js');
const Caterers = require('./src/backend/models/caterers.js');
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DATABASE_URL;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);

const port = process.env.PORT;

connectDB(uri);

app.use(express.json());

app.use("/api", web);

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Categories.find()
        res.json(categories);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

app.get('/api/suppliers', async (req, res) => {
    try {
        const suppliers = await Suppliers.find()
        res.json(suppliers);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Reviews.find()
        res.json(reviews);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

app.get('/api/caterers', async (req, res) => {
    try {
        const caterers = await Caterers.find()
        res.json(caterers);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port)
});