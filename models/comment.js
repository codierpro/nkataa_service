var mongoose = require('mongoose');

 var commentSchema = mongoose.Schema({
     time:Date,
     commentBody:String,
     user:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
     post:{type:mongoose.Schema.Types.ObjectId, ref:"post"}

 });
 module.exports = mongoose.model("comment", commentSchema)