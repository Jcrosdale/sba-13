const mongoose = require('mongoose');

// Establish a connection to your MongoDB Atlas database using Mongoose.
mongoose.connect(process.env.MONGO_URI)
    // Handle successful connections
    .then(() => {
        console.log('Successfully connected.')
    })
    // Handle connection errors gracefully by logging appropriate messages to the console.
    .catch((err) => {
        console.error('Error connecting to database.', err);
    });

module.exports = mongoose.connection;
