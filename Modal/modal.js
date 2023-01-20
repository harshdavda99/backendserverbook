const mongoose = require("mongoose");

const userInfoSchema = mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    Password:{
        type: String,
    },
    C_Password:{
        type: String,
    },
    Email:{
        type: String,
    }
});

const bookInfoSchema = mongoose.Schema({
    author:{
        type: String,
    },
    title:{
        type: String,
    },
    description:{
        type: String,
    }
});

const userInfo = mongoose.model('PostUserInfo', userInfoSchema);
const bookInfo = mongoose.model('BookInfos', bookInfoSchema )
module.exports = {userInfo,bookInfo};