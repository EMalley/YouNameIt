const mongoose = require('mongoose');

let Schema =mongoose.Schema;

const UserSessionSchema = new Schema({
    userId: {
        type: Number,
        default: -1
    },
    timeStamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('UserSession', UserSessionSchema)