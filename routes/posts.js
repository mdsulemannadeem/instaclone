const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    picture: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    caption:String,
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    description: String,

});

module.exports = mongoose.model('post', postSchema);
