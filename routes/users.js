const mongoose = require('mongoose');
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

