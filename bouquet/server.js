const express = require("express");
const connectDB = require("./src/backend/db/connectdb.js");
const web = require("./src/backend/routes/web.js");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const multer = require('multer');
const path = require('path');
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
const User = require('./src/backend/models/user.js');
const Categories = require('./src/backend/models/categories.js');
const Suppliers = require('./src/backend/models/suppliers.js');
const Reviews = require('./src/backend/models/reviews.js');
const Caterers = require('./src/backend/models/caterers.js');
const Wedding = require('./src/backend/models/wedding.js');
const Events = require('./src/backend/models/events.js');
const Guestlist = require('./src/backend/models/guestList.js');
const Checklist = require('./src/backend/models/checklist.js');
const Task = require('./src/backend/models/task.js');
const Favourites = require('./src/backend/models/favourites.js');
const Booked = require('./src/backend/models/booked.js');
const Image = require('./src/backend/models/image.js');
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DATABASE_URL;

const port = process.env.PORT;

connectDB(uri);

app.use(express.json());

app.use("/api", web);


app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

app.get("/api/categories", async (req, res) => {
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
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

app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
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

app.get('/api/weddings', async (req, res) => {
  try {
    const weddings = await Wedding.find()
    res.json(weddings);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Events.find()
    res.json(events);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/guestlist', async (req, res) => {
  try {
    const guestlist = await Guestlist.find()
    res.json(guestlist);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/checklist', async (req, res) => {
  try {
    const checklist = await Checklist.find()
    res.json(checklist);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.get('/api/favourites', async (req, res) => {
  try {
    const favourites = await Favourites.find()
    res.json(favourites);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/favourites/create', async (req, res) => {
  const newFavourite = new Favourites(req.body)
  try {
    const result = await newFavourite.save()
    res.send(result)
  } catch (error) {
    console.log(error)
  };
});

app.delete('/api/favourites', async (req, res) => {
  try {
    const result = await Favourites
      .findOneAndDelete({ user_id: req.body.user_id, supplier_id: req.body.supplier_id })
    res.send(result)
  } catch (error) {
    console.log(error)
  }
});

app.get('/api/booked', async (req, res) => {
  try {
    const booked = await Booked.find()
    res.json(booked);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/booked/create', async (req, res) => {
  const newBooking = new Booked(req.body)
  try {
    const result = await newBooking.save()
    res.send(result)
  } catch (error) {
    console.log(error)
  };
});

app.get('/api/booked/:id', async (req, res) => {
  try {
    const result = await Booked.findById(req.params.id)
    res.send(result)
  } catch (error) {
    console.log(error)
  };
});

app.put('/api/booked/:id', async (req, res) => {
  try {
    const result = await Booked.findByIdAndUpdate
      (req.params.id, req.body)
    res.send(result)
  } catch (error) {
    console.log(error)
  }
});

app.delete('/api/booked', async (req, res) => {
  try {
    const result = await Booked.findOneAndDelete
      ({ user_id: req.body.user_id, supplier_id: req.body.supplier_id })
    res.send(result)
  } catch (error) {
    console.log(error)
  }
});

app.use(express.static(path.join(__dirname, 'public')));

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public/media'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.post('/image/upload', upload.single('image'), async (req, res) => {
    const image = new Image({
        name: req.file.filename,
        imageUrl: `/media/${req.file.filename}`,
    });

    try {
        const savedImage = await image.save();
        res.status(201).json(savedImage);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/images', async (req, res) => {
    try {
        const images = await Image.find();
        res.json(images);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/api/send-invitations', async (req, res) => {
  const { guests, eventDetails, user, wedding } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const sendMailPromises = guests.map(guest => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: guest.email,
      subject: 'You are invited!',
      html: `
            <p>Dear ${guest.firstName},</p>
            <p>Please join us for our wedding on ${eventDetails.date}.</p>
            <p>Join us on the Bouquet app to find all the information!</p>
            <p><img src="https://victorzehmour.be/media/Bouquet_logo.png" alt="Wedding Invitation Image" width="100px"></p>
            <p>Follow this link to Bouquet and your invitation:</p>
            <a href="https://victorzehmour.be/">Bouquet</a>
            <a href="http://localhost:4001/guestRegister/${wedding._id}/${guest.email}">Click here to enter</a> 
            <p>Wedding key:${wedding._id}</p>
            <p>Best regards,<br>${user.user.firstName}</p>
          `,
    };

    return transporter.sendMail(mailOptions)
      .then(info => console.log(`Email sent: ${info.response}`))
      .catch(error => {
        console.error(`Error sending email to ${guest.email}:`, error);
        throw error;  // This will be caught by the outer try-catch
      });
  });

  try {
    await Promise.all(sendMailPromises);
    res.status(200).send('Invitations sent successfully');
  } catch (error) {
    console.error('Error sending invitations:', error);
    res.status(500).send('Error sending invitations');
  }
});


app.listen(port, () => {
  console.log("Server listening on port:" + port);
});
