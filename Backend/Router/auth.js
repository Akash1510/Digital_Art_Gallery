const express = require('express')

const router = express.Router()

const verifyauth = require('../Middlewares/VerifyAuth')
const { signup, login, getAlluser,forgot_password,Reset_password } = require('../Controllers/AuthController')

const {body } = require('express-validator');

// POST  || /api/v1/signup
router.post('/signup', 
    [
        body('email').isEmail().withMessage('Enter a Valid Email'),
        body('password').isLength({min:8}).withMessage('Password must be at least 8 Character')
    ]
    ,signup)


// POST  || api/v1/login

router.post('/login',
    [
        body('email').isEmail().withMessage('Enter a Valid Email'),
        body('password').isLength({min:8}).withMessage('Password must be at least 8 Character')
    ]
    ,login)



// logged in user get private   \\ shows that posts

router.get('/user', verifyauth,getAlluser)

// forgotpassword api/v1/forgot_password
router.post('/forgot_password', forgot_password)

// resetpassword api/v1/reset_password
router.post('/reset_password', Reset_password)


module.exports = router