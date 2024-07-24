const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    UserId :{
        type:mongoose.Schema.ObjectId,
        ref:'user',
        required:true
    },
    post_image:{
        type:String,
    },
    description:{
        type:String
    },
    title:{
        type:String
    },
    likes:{
        type:String,
        default:null
    },
    created_at:{
        type:String
    }
},{toJSON:{virtuals:true},
toObject:{virtuals:true}
})

PostSchema.pre('save',async function(next){
  let date_info = new Date
  let date_into = date_info.getDate()+'/'+(date_info.getMonth()+1) +'/'+date_info.getFullYear()
  this.created_at = await date_into
})

PostSchema.virtual('posted_by',{
    ref:'user',
    localField:'UserId',
    foreignField:'_id',
    justOne:true
})

module.exports = mongoose.model('post',PostSchema)