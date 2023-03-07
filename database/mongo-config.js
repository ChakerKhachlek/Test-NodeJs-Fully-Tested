const mongoose =require ('mongoose');
require("dotenv").config(); 
mongoose.set('strictQuery', false);
const connectToMongoDB = ()=> mongoose.connect(
  process.env.MONGODB_URI, 
  {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }
);

module.exports = connectToMongoDB;