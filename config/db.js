// Set up MongoDB connection
// Bring in mongoose
const mongoose = require('mongoose');
// bring in config package
const config = require('config');
// get values from Database, which is the string within momgoURI in default.json
const db = config.get('mongoURI');

// Connect to mongoDB
const connectDB = async () => {
  // run mongoose in a try catch block
  // we use a try catch block so we can have this fail if it cant connect, then show us a message
  try {
    // since this returns a promise, we put an await before it
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure if connection has errors
    process.exit(1);
  }
};

// This will fix the depreciation warning for collection.ensureIndex
mongoose.set('useCreateIndex', true);

module.exports = connectDB;
