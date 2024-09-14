const User = require('../Model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const crypto = require('crypto');
const nodemailer = require('nodemailer')
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    }
    const { name, email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ msg: 'User Already Exist' });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        user = new User({
            name,
            email,
            password: hashpassword
        })

        await user.save();
        const token = generateToken(user);
        res.json({ token })


    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ msg: 'Server Error' });
    }
}


// POST api/v1/login | public | login exixting user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                msg: 'invalid credentials',
                success: false
            })
        }
        let user = await User.findOne({ email }).select('+password')
        if (!user) return res.status(400).json({
            msg: 'invalid credentials',
            success: false
        })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({
            msg: 'invalid credentials',
            success: false
        })
        const token = generateToken(user)
        res.json({ token })
    }

    catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
}

exports.getAlluser = async (req, res) => {
    try {
        const user = await User.find().populate({
            path: 'posts',
            populate: {
                path: 'comments',
            }
        })
        if (user) {
            return res.status(200).json({ user, success: true })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Server Error' })

    }

}


nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }


})

const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "aakashjadhav15102003@gmail.com",
        pass: "jjdq pjtp efla yihu"

    },
    logger: true,
    debug: true,

});

async function SendMailOtp(userEmail, user) {
    const mailOptions = {
        from: "aakashjadhav15102003@gmail.com",
        to: userEmail,
        subject: 'OTP for Reset Password',
        text: `Your OTP for password reset is  : ${user.resetOtp}.
        Do Not shere your OTP with anyone else . Validity 2 Mins`
    };
    try {
        await transport.sendMail(mailOptions)
        console.log('Email sent', userEmail)


    } catch (error) {
        console.error('Error Sending OTP email : ', error);
    }
}


exports.forgot_password = async (req, res) => {
    const { email } = req.body;
    try {

        const otp = crypto.randomInt(100000, 999999);
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentails' });
        }

        user.resetOtp = otp;
        user.otpExpiry = Date.now() + 2 * 60 * 1000 // 45 s  expiry
        await user.save();

        await SendMailOtp(email, user);
        return res.status(200).json({
            msg: 'OTP sent to your email',
            success: true,
            email: email
        })
    } catch (error) {

        console.log(error);
        return res.status(400).json({
            msg: 'Invalid Credentails',
            success: false
        })
    }
}

exports.Reset_password = async (req, res) => {
    const { email, newPassword, confirmPassword, otp } = req.body;
    try {

        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentails' });
        }
        if (user.otpExpiry < Date.now()) {
            return res.status(400).json({ msg: 'OTP expired' })
        }

        // check the otp is correct or not

        if (user.resetOtp !== otp) {
            return res.status(400).json({ msg: 'Invalid OTP' })
        }

        // check if new password and confirme password match
        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                msg: 'Password do not match',
                success: false
            })
        }

        // update the password in DB
        const hashNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashNewPassword;
        user.resetOtp = '';
        user.otpExpiry = '';
        await user.save();
        return res.status(200).json({
            msg: 'Password updated successfully',
            success: true
        })


    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: 'Invalid Credentails',
            success: false
        })

    }
}
