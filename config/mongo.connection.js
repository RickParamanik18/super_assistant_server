const mongoose = require("mongoose");

// `mongodb+srv://rickkcir100:${process.env.DB_PASSWORD}@cluster0.52bnw4z.mongodb.net/superAssistant?retryWrites=true&w=majority`

const con = mongoose.createConnection("mongodb://localhost:27017/superCart");

module.exports = con;
