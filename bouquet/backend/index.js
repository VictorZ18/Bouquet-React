express = require('express');
mongoose = require('mongoose');
axios = require('axios');
User = require('./models/user');
cors = require('cors');
app = express();

mongoose.connect("mongodb+srv://vzehmour:Maite1506@cluster0.ovnqhfx.mongodb.net/Bouquet")  
.then(() => 
console.log('MongoDB Connected'))
.catch( error => 
console.log(error)
);

// Create a new blog post object
const user = new User({
  firstName: 'Kevin',
});

// Insert the article in our MongoDB database
user.save();

app.use(cors());

const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});