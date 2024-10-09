import React, { useState, useEffect } from "react";
import axios from "./utils/api"; // Adjust path to your axios config
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [userInfo] = useState({ name: "Akash Jadhav", logo: "/path-to-user-logo" }); // Dummy data, replace with real user info
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user posts
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/posts"); // API to fetch posts
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`/delete-post/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (postId) => {
    navigate(`/edit-post/${postId}`); // Redirect to edit post page
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700">
      {/* Profile Header */}
      <div className="w-full max-w-4xl text-white flex flex-col items-center p-4">
        <div className="flex items-center space-x-4">
          <img
            src={userInfo.logo}
            alt="User Logo"
            className="w-24 h-24 rounded-full shadow-lg"
          />
          <h1 className="text-3xl font-bold">{userInfo.name}</h1>
        </div>
        <h2 className="text-xl mt-2">Total Posts: {posts.length}</h2>
      </div>

      {/* Posts Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={post.post_image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-purple-800 mt-2">
              {post.title}
            </h3>
            <p className="text-gray-600">{post.description}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleEdit(post._id)}
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <AiFillEdit className="mr-1" /> Edit
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                className="text-red-500 hover:text-red-700 flex items-center"
              >
                <AiFillDelete className="mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
