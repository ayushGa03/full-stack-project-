const mongoose = require("mongoose")
const noteShems = new mongoose.Schema({
    title:String,
    description: String
})
const noteModel = mongoose.model("chacha",noteShems)
module.exports = noteModel;