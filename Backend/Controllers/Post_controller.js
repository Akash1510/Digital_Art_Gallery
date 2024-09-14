const Post = require('../Model/Post');
const user = require('../Model/User');

const path = require('path')
const fs = require('fs');
const { default: mongoose } = require('mongoose');




// Create the rew post
exports.createPost = async (req, res) => {
    const { title, description } = req.body;

    try {
        if (!req.user || !req.user.id) {
            return res.status(400).json({ message: 'User is not authenticated' });
        }

        if (!req.file) {
            return res.status(400).join({
                message: 'User is Not Authenticated'
            })
        }

        const imgPath = path.join(__dirname, '../uploads', req.file.filename);
        const imgData = fs.readFileSync(imgPath, 'base64');


        const newPost = await Post.create({
            UserId: req.user.id,
            title: title,
            description: description,
            post_image: imgData

        })
        return res.status(200).json({ message: "Post created successfully", newPost })
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: ' Post Failed ' })
    }
}







// Get all Posts
exports.getPosts = async (req, res) => {
    try {

        const posts = await Post.find().populate('comments').populate('posted_by');
        if (!posts || posts.length === 0) {
            return res.status(400).json({ msg: 'Invalid Post' });
        }
        return res.status(200).json({ posts })
    }
    catch (error) {
        return res.status(500).json({ msg: 'Error Fetching Posts ' })
    }
}









// Get a single Post by ID
exports.getPostsById = async (req, res) => {
    try {

        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(400).json({ msg: 'Invalid Post ID' });
        }
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(400).json({ msg: 'Invalid Post' });
        }
        return res.status(200).json({
            title: post.title,
            post_image: post.post_image,
            description: post.description
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error Fetching Post', error
        });

    }
}








// Update the Post

exports.UpdatePost = async (req, res) => {
    const { title, description } = req.body;

    try {

        const existingimage = await Post.findByIdAndUpdate(req.params.id);

        if (!existingimage) {
            return res.status(404).json({
                error: 'Image Not Found'
            })
        }
        //  get new images path

        let imgData;
        if (req.file) {
            const imgPath = path.join(__dirname, '../uploads', req.file.filename);
            imgData = fs.readFileSync(imgPath, 'base64');
        }
        // update the image 
        existingimage.title = title || existingimage.title
        existingimage.description = description || existingimage.description
        if (imgData) {
            existingimage.post_image = imgData
        }

        await existingimage.save();

        return res.json({
            message: 'Image is Updated SuccessFully'
        })

    } catch (error) {

        return res.status(500).json({
            msg: 'Error Updating Post',
            error
        })

    }
}









exports.DeletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({
                msg: 'Post Not Found'
            })
        }
        return res.status(200).json({
            msg: 'Post Deleted SuccessFully'
        })
    } catch (error) {

        return res.status(500).json({
            msg: 'Error Deleting Post', error
        })
    }
}











exports.Follorwer_Post = async (req, res) => {
    try {

        const getuser = await user.findById(req.user.id);
        const post = await Post.find({
            UserId: { $in: getuser.following },
        }).populate('comments').populate('posted_by')
        return res.status(200).json({
            data: post, msg: 'Fetch FollowerPost SuccessFully'
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false
        })

    }
}