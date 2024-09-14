const mongoose  =require('mongoose')

const CommentSchema = new mongoose.Schema({
    PostId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post',
        required:true
    },
    UserId:{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

module.exports  = mongoose.model('comment',CommentSchema)