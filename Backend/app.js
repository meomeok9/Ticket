require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const URI = process.env.MONGODB_URI;
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "/images")));
mongoose.set("strictQuery", false);
mongoose
  .connect(URI) //
  .then((rs) => {
    server.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("fail to connect to MongoDB!!");
  });
