
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/gmt', {useNewUrlParser: true});

module.exports = mongoose;