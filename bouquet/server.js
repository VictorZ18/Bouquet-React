const express = require("express");
const connectDB = require("./src/backend/db/connectdb.js");
const web = require("./src/backend/routes/web.js");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

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

app.post('/api/send-invitations', async (req, res) => {
  const { guests, eventDetails } = req.body;

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
            <p>Best regards,<br>Your Team</p>
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
  console.log("Server listening at http://localhost:" + port);
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
});
