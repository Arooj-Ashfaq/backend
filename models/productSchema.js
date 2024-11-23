const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    title : String,
    picture : String,
    description : String,
    price : Number,
    rating : Number
})
module.exports = mongoose.model('Product' , productSchema)