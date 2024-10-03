const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  books: [
    {
      s_no: Number,
      booktitle: String,
      author: String,
      Gener: String,
      year_of_publication: Number,
      isbn: Number,
    },
  ],
});

module.exports = mongoose.model("Book", bookSchema);
