const mongoose = require("mongoose");

const postContactSchema = mongoose.Schema({
    contact:{
        type: String,
    }
})

const contactlist = mongoose.model('PostContact', postContactSchema);
module.exports = contactlist;