const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
let UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    name: {
         type: String,
    }
});


//Users is what will call the UserSchema when called upon. 
let User = mongoose.model("user", UserSchema);
module.exports = User