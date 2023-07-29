const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverRoute = require("./routes/serverRoute");

const server = express();

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/", serverRoute);

// const MONGO_URI = `mongodb://127.0.0.1:27017/restaurantsDB`

const MONGO_URI =
  "mongodb+srv://admin:admin123@zomato-clone.efdhz0i.mongodb.net/restaurantsDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI).then(() => {
  console.log("DB CONNECTED");

  server.listen(7001, () => {
    console.log("Server is Running on port 7001");
  });
});
