const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
mongoose.set("strictQuery", false);

// Connect to MongoDB
const connectDB =async  () => {
    try {
       await mongoose.connect(process.env.DB_URL).then((data) => {
            console.log(`MongoDB Connected: ${data.connection.host}`.cyan.underline.bold);
      });
    } catch (err) {
        console.error(`Error: ${err.message}`.red);
        process.exit(1);
    }
}
module.exports = connectDB;