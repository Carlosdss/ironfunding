// models/user.js
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  email      : String,
  username   : String,
  password   : String,
  description: String,
  imgUrl     : { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=33&txt=250%C3%97250&w=250&h=250" }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
   }
});

module.exports = mongoose.model('User', UserSchema);
