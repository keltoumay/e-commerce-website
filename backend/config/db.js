const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false); // Add this line to suppress the deprecation warning

    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
