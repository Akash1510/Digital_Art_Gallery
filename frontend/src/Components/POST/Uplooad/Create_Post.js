import axios from "../post_axios_config";
import React, { useState } from "react";
import { AiOutlineFileImage, AiOutlineEdit } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { IoIosAlert } from "react-icons/io";
import './c_post.css'

const CreatePost = () => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [post_image, setimage] = useState(null);  // Will store base64 string
  const [alert, setalert] = useState('');
  const [posts, setPosts] = useState([]); // Store all posts

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      post_image,  // Base64 string
    };

    try {
      const res = await axios.post('/add-new', formData);
      if (res.status === 200) {
        setalert('Post created successfully');
        setPosts([...posts, { title, description, post_image }]); // Save post to state
      }
    } catch (error) {
      setalert('Post Not Created Successfully');
    }
  };

  // Handle image upload and convert it to base64
  const Upload_Image = (e) => {
    if (!e.target.files[0]) {
      setalert("Image is Invalid");
    } else {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;  // Base64-encoded string
        setimage(base64String);  // Store the base64 string
      };

      reader.readAsDataURL(file);  // Convert image to base64
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
        <div className="w-full max-w-lg p-6 bg-white shadow-xl rounded-lg">
          <h1 className="text-center text-3xl font-semibold text-purple-800 mb-4">
            <AiOutlineEdit className="inline-block mr-2" />
            Create a Post
          </h1>
          {alert && (
            <div className="text-center mb-4 text-red-600 flex items-center justify-center">
              <IoIosAlert className="mr-2" /> {alert}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              <AiOutlineEdit className="text-purple-600 mr-2" />
              <input
                type="text"
                placeholder="Enter Post Title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-800"
              />
            </div>

            <div className="flex items-center bg-gray-100 rounded-md p-2">
              <AiOutlineEdit className="text-purple-600 mr-2" />
              <input
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-gray-800"
              />
            </div>

            <div className="flex items-center justify-center bg-gray-100 rounded-md p-4 cursor-pointer hover:bg-purple-200 transition">
              <AiOutlineFileImage className="text-purple-600 text-2xl mr-4" />
              <label htmlFor="file-upload" className="text-gray-800">
                {post_image ? "Image Uploaded" : "Upload an Image"}
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={Upload_Image}
                className="hidden"
                accept="image/*"
              />
            </div>

            {/* Show image preview if base64 image is available */}
            {post_image && (
              <div className="flex justify-center mb-4">
                <img
                  src={post_image}  // Directly use the base64 string
                  alt="Preview"
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-2 px-4 rounded-full flex items-center"
              >
                <FiUpload className="mr-2" />
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Display Posts */}
        <div className="w-full max-w-lg mt-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Your Posts</h2>
          {posts.length === 0 ? (
            <p className="text-center text-white">No posts yet!</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg mb-4 p-4">
                <h3 className="text-lg font-bold text-purple-800">{post.title}</h3>
                <p className="text-gray-700">{post.description}</p>
                {post.post_image && (
                  <img
                    src={post.post_image}  // Use the base64 string for rendering
                    alt="Post"
                    className="w-full h-64 object-cover rounded-md mt-2"
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CreatePost;
