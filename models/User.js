let mongoose = require('mongoose');
let bcrypt =require('bcrypt');

let Schema = mongoose.Schema;

//Schema for users
let userSchema = new Schema({
    name: {
        firstName: { type: String, required: true, default: "" },
        lastName: { type: String, required: true, default: "" },
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.SaltSnyc(8), null)
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
};

let Users = mongoose.model('users', userSchema);
module.exports = Users;