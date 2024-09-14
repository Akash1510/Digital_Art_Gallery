
const express = require('express')
const router = express.Router()

const user = require('../Model/User')
const Post = require('../Model/Post')
const Comment = require('../Model/Comment')

const verifyAuth = require('../Middlewares/VerifyAuth')

// GET | /api/v1/post/like/:id | private | like post

router.get('/like/:id',verifyAuth,async(req,res)=>{
    try{
        
        const liked = await Post.updateOne(
            {
                _id:req.params.id
            },
        {
            $push:{
                
                likes:req.user.id
            }
        } )

        if(!liked){
            return res.status(401).json({success:false})
        }
        return res.status(200).json({success:true});
    }
    catch(err){
        console.log(err)
        return res.status(400).json({success:true})
    }
})

// GET | /api/v1/post/unlike/:id | private | unlike post

router.get('/unlike/:id',verifyAuth , async(req,res)=>{
    try {
        const liked = await  Post.updateOne({
            _id:req.params.id
        },
        {
            $pull:{
                likes:req.user.id
            }
        })

        if(!liked){
            return res.status(401).json({success:false})
        }

        return res.status(200).json({success:true})
    } catch (error) {
        console.log(err)
        return res.status(400).json({success:false})
    }
})

// GET | /api/v1/post/follow/:id  | private | follow a User
router.get('/follow/:id',verifyAuth,async(req,res)=>{
  try {
    const followed = await user.updateOne({
        _id:req.params.id
    },{
        $push:{following:req.params.id}
    })

    const followerAdded = await user.updateOne({
        _id:req.user.id
    },{
        $push:{followers:req.user.id}
    })

    if(!followed || !followerAdded){
        return res.status(401).json({success:false})
    }
    return res.status(200).json({success:true})
  } catch (error) {
    console.log(error)
    return res.status(400).json({success:false})
  }
})

//  GET  | /api/v1/post/unfollow/:id  | private |  unfollow a user
router.get('/unfollow/:id',verifyAuth,async(req,res)=>{
    try {
        const followFixed = await user.updateOne({
            _id:req.params.id
        },{
            $pull:{following:req.params.id}
        })
        const followerFixed = await user.updateOne({
            _id:req.user.id
        },{
            $pull:{followers:req.params.id}
        })
        if(!followFixed || !followerFixed){
            return res.status(401).json({success:false})
        }
        res.status(200).json({success:true})
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false})
        
    }
})

// GET | /api/v1/post/profile/:id | public | get a users profile by iD

router.get('/profile/:id',async(req,res)=>{
    try {
        const user = await user.findById(req.params.id).populate({
            path:'posts',
            populate:{
                path:'comments'
            }
        })
        if(!user){
            return res.status(404).json({success:false})
        }
        res.status(200).json({
            data:user,
            success:true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({success:false})
    }
})



// GET | api/v1/comment/:id

router.get('/comment/:id',verifyAuth,async(req,res)=>{
    try{

        const comment = await Comment.create({
            PostId:req.params.id,
            comment:req.body.comment,
            UserId:req.user.id
        })
        await comment.save();
        if(!comment){
            return res.status(400).json({
                success:false
            })
        }
        res.status(200).json({
            data:comment,
            success:true
        })
    }catch(error){
        console.log(error)
        return res.status(400).json({success:false})
    }
    })

module.exports =router
