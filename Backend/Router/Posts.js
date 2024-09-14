const express = require('express')
const router = express.Router();

const path = require('path');

const verifyAuth = require('../Middlewares/VerifyAuth');

const { createPost, getPosts, getPostsById, UpdatePost, DeletePost, Follorwer_Post } = require('../Controllers/Post_controller');
const fs = require('fs')


const  multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir);  // Make sure the uploads directory is passed here
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));  // Append original extension
    }
});

const upload = multer({
    storage : storage,
    fileFilter : (req,file,cb)=>{
        const filetypes = /jpeg|jpg|png/
        const extreme = filetypes.test(path.extname(file.originalname).toLowerCase())
        const mimetype = filetypes.test(file.mimetype);

        if(mimetype && extreme){
            return cb(null, true)
        }
        else{
            cb(new Error('only images are Allowed'));
        }

    }
})

const uploadsDir = path.join(__dirname,'../uploads')
if(!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir);
}



// GET | /api/v1/posts | public | get all post

router.get('/posts', verifyAuth, getPosts);


//  GET | /api/v1/post/:id | public | get a single post by id 

router.get('/post/:id', verifyAuth, getPostsById);

// POST  |  /api/v1/add-new  | private  | add a new post

router.post('/add-new', verifyAuth, upload.single('post_image'), createPost);


// PUT  | /api/v1/post/edit-post/:id  | private | edit post

router.put('/edit-post/:id', verifyAuth, upload.single('post_image'), UpdatePost);

// DELETE | /api/v1/post/delete-post/:id  |private | delete post

router.delete('/delete-post/:id', verifyAuth, DeletePost);

//  GET | /api/v1/folloers-posts | private | get all posts form the user that logged in user follow
router.get('/followrs-posts', verifyAuth, Follorwer_Post);

module.exports = router