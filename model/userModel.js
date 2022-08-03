const { model, Schema } = require('mongoose');


const usersSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    },
})

const User = model("User", usersSchema);

module.exports = User;