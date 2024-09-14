const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    resetOtp: {
        type: String
    },
    otpExpiry: {
        type: Date
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

UserSchema.virtual('posts', {
    ref: 'post',
    localField: '_id',
    foreignField: 'UserId',
    justOne: false
});

module.exports = mongoose.model('user', UserSchema);
