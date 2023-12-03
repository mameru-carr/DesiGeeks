const dotenv_config = require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(uri);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
