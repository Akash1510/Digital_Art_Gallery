const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
     },
     password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:20,
        select:false,
        },
        following:{
            type:Array,
        },
        followers:{
            type:Array,
        },
        created_at:{
            type:String,
        }
        
     },
     {
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
})

UserSchema.pre('save',async function (next){
    let date_info = new Date
    let date_into = date_info.getDate() + '/' + (date_info.getMonth()+1) +'/' + date_info.getFullYear()
    this.created_at = await date_into
})

UserSchema.virtual('posts',{
    ref:'Post',
    localField:'_id',
    foreignField:'UserId',
    justOne:false
})

module.exports = mongoose.model('user',UserSchema)