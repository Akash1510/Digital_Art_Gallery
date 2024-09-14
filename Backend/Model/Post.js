const mongoose = require('mongoose');

// Post Schema
const PostSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    description: {
        type: String,
        trim: true,  // Trims extra spaces
    },
    title: {
        type: String,
        required: true,
        trim: true  // Trims extra spaces
    },
    post_image: {
        type: String,
        required: true  // Ensure the image is provided
    },
    likes: {
       type: [mongoose.Schema.Types.ObjectId],
        ref: 'user'
    },
    post_emotions: {
        type: String,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now  // Automatically set the date to current time
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Pre-save Hook to Format `created_at`
PostSchema.pre('save', function (next) {
    const date = new Date();
    const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    this.created_at = date;  // Store date as Date object, not a string
    next();
});

// Virtual for 'posted_by' field to populate the User information
PostSchema.virtual('posted_by', {
    ref: 'user',
    localField: 'UserId',
    foreignField: '_id',
    justOne: true  // Only fetch one user (the post creator)
});

// Virtual for 'comments' field to populate associated comments
PostSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'PostId',
    justOne: false  // Fetch multiple comments associated with the post
});

module.exports = mongoose.model('post', PostSchema);
