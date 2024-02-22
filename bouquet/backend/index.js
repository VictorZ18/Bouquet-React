const express = require('express')
const connectDB = require('./db/connectdb.js')
const web = require('./routes/web.js')
const cors = require('cors')
const app = express()
app.use(cors())

const port = process.env.PORT || '4000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://vzehmour:Maite1506@cluster0.ovnqhfx.mongodb.net/";

connectDB(DATABASE_URL);

app.use(express.json())

app.use("/api", web)

app.listen(port, () => {
    console.log('Server listening at http://localhost:' + port)
})

