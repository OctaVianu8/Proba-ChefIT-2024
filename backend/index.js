const User = require("./models/user.js");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const uri = "mongodb+srv://stanescumateioctavian:xCMpj8ryCwhK6UPm@cluster0.3xnca.mongodb.net/chef_it?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => {
  console.log("Connected to MongoDB!");
}).catch((err) => {
  console.error("Failed to connect to MongoDB", err);
});

app.use(cors());

app.post('/register', async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username: name, email, phone, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});

