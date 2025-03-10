const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.connect("mongodb://127.0.0.1:27017/insta")
const plm = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,

  },
  name:String,
  email:{type:String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"post" // Assuming posts are strings, you can adjust the type as needed
    },
  ],
  profileImage: {
    type: String, // Assuming dp is a URL or file path for the user's profile picture
  },
 bio:String,
  
});

userSchema.plugin(plm);
module.exports =mongoose.model('user', userSchema);

=======
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instainsta");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  picture: {
    type: String,
    default: "def.png"
  },
  contact: String,
  bio: String,
  stories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "story" 
    }
  ],
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post" 
    }
  ],
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post" 
  }],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    } 
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user" 
    }
  ]
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
>>>>>>> 920173667d39b42221dfbc256fe2b1e87fc58ca2
