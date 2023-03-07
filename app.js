const express = require("express");
const bodyParser = require("body-parser");
const connectToMongoDB = require("./database/mongo-config");


const app = express();


//connecting to database
connectToMongoDB()
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });
  
  //body parser 
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.json());

//routes

app.use("/", require("./routes/taches-routes"));


//server port
PORT=5001;

//starting server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));