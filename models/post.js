var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    time:Date,
    PostBody:String,
    User:{type:mongoose.Schema.Types.ObjectId, ref:'user'},
    comment:[{type:mongoose.Schema.Types.ObjectId, ref:'comment'}]

})
module.exports = mongoose.model('post', postSchema);