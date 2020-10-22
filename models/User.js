let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Schema for users
let userSchema = new Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

let Users = mongoose.model('users', userSchema);
module.exports = Users;