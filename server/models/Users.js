const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name:String,
    Balance:Number,
    Phone:Number
});

const User = module.exports = mongoose.model('USER',UserSchema);