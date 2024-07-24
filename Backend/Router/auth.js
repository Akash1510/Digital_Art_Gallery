const express = require('express')

const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../Model/User')
const verifyauth = require('../Middlewares/VerifyAuth')
const { token } = require('morgan')

// POST  || /api/v1/signup
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.status(400).json({
                msg: 'Please fill the required fields',
                success: false
            })
        }

        let user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({
                msg: 'user already exist',
                success: false
            })

        }

        user = new User({
            name: name,
            email: email,
            password: password,
        })

        const salt = await bcrypt.genSalt(10)
        user.password  = await bcrypt.hash(password,salt)
        await user.save();

        //payload
        jwt.sign({id:user._id} , process.env.JWT_SECRET,{
            expiresIn:36000
        }, (err,token)=>{
            if(err) throw err
            res.status(200).json({token})
        })
    }

    catch (err) {
         console.log(err)
         return res.status(400).json({success:false})
    }
})

// POST  || api/v1/login

router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({mg:'invalid Credentials',
                success:false
            })
        }
        let user = await User.findOne({email:email}).select('+password')
        if(!user ){
            return res.status(400).json({msg:'invalid credentials',
                success:false
            })

        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({msg:'invalid credentials',
                success:false})
        }
        jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:36000
        }, (err,token)=>{
            if(err) throw err
            res.status(200).json({token})
        })

    }
    catch(err){
    console.log(err)
    return res.status(400).json({success:false})
    }
})



// logged in user get private   \\ shows that posts

router.get('/user',verifyauth,async(req,res)=>{
    try {
        const user = await User.findById(req.user.id).populate('posts')
        if(user){
            return res.status(200).json({user,success:true})
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:'Server Error'})
        
    }

})

module.exports = router