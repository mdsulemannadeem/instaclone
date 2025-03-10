const mongoose = require('mongoose');

<<<<<<< HEAD
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
=======
const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  caption: String,
  like: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }],
  comments: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  },
  shares: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }],
  picture: String
})


module.exports = mongoose.model("post", postSchema);
>>>>>>> 920173667d39b42221dfbc256fe2b1e87fc58ca2
