const dotenv_config = require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;
const uri = process.env.NODE_ATLAS_URI;
const build_dir = path.join(__dirname, '..', 'client', 'build');

// middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
async function connectMongoDBAsync() {
	try {
		let connection = await mongoose.connect(uri);
		console.log("Successfully connected to the database");

		try {
			console.log("Ping Database to check connection");
			let ping = await mongoose.connection.db.admin().ping();
			if (ping.ok === 1) {
				console.log("Atlas Database Ping Successfull");
			}
			else {
				console.log("Atlas Database Ping Failed");
			}
		}
		catch (error) {
			console.log(error);
		}
	}

	catch (error) {
		console.log(error);
	}

	finally {
		await mongoose.connection.close();
	}
}

connectMongoDBAsync();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/check', (req, res) => {
	res.json({ message: 'Hello from the API!' });
});
