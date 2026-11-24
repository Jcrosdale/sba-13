import express from 'express';
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const app = express();
const port = 3000;

const uri = process.env.MONGO_URI
const client = new MongoClient(uri);

// Start the server
app.listen(port, () => console.log('Server running on http://localhost:' + port))
