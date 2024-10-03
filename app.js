const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();
const PORT=process.env.PORT||3000;


const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
console.log(process.env.MONGO_PWD, process.env.MONGO_USER);

const url =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@codingassignmentdb.fjgy8.mongodb.net/?retryWrites=true&w=majority&appName=codingAssignmentDB`;


const connection = mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Mongodb connected successfully!!!!!hurray");

    app.listen(PORT, () => {
      console.log("server is running");
    });
  })
  .catch((err) => console.log(err));

//api crud

app.post("/addbook", async (req, res) => {
  const data = req.body;

  try {
    const book = require("./Models/bookModel");
    const result = await book.create(data);
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
