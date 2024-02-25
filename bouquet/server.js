const express = require('express')
const connectDB = require('./backend/db/connectdb.js')
const web = require('./backend/routes/web.js')
const cors = require('cors')
const app = express()
app.use(cors())
const User = require('./backend/models/user.js');

const port = process.env.PORT || '4000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://vzehmour:Maite1506@cluster0.ovnqhfx.mongodb.net/";

connectDB(DATABASE_URL);

app.use(express.json())

app.use("/api", web)

app.get('/api/users', async (req, res) => {
    try{
        const users = await User.find()
        res.json(users); 
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
})

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port)
})

