// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import Navbar from './Navbar';
import PostCard from './PostCard';
import UserSidebar from './UserSidebar';
import api from './utils/api';  // Axios instance
import { AiOutlinePlusCircle } from 'react-icons/ai';  // Icon for "Create Post"

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: '',
    totalLikes: 0,
    totalPosts: 0,

    comments: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all posts
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);  // Assuming API returns an array of posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Fetch user info
    const fetchUserInfo = async () => {
      try {
        // Mock endpoint for user profile info (replace with actual endpoint)
        const response = await api.get('/');  // Adjust API call
        const { username, totalLikes, totalPosts, comments } = response.data;
        setUserInfo({ username, totalLikes, totalPosts,  comments });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchPosts();
    fetchUserInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-900">
      <Navbar />

      <div className="container mx-auto py-8 flex flex-wrap">
        {/* Posts Section */}
        <div className="w-full lg:w-3/4 p-4">
          {posts.map((post) => (
            <PostCard
              key={post._id} // Assuming each post has a unique _id
              title={post.title}
              description={post.description}
              image={post.post_image}  // Assuming the post object has a post_image field
              likes={post.likes}
              comments={post.comments.length}  // Assuming comments is an array
            />
          ))}
        </div>

        {/* User Info Sidebar */}
        <div className="w-full lg:w-1/4 p-4">
          <UserSidebar
            username={userInfo.username}
            totalLikes={userInfo.totalLikes}
            totalPosts={userInfo.totalPosts}
            comments={userInfo.comments}
          />
        </div>
      </div>

      {/* Floating Action Button for Create Post */}
      <div className="fixed bottom-10 right-10">
        <button
          className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 hover:bg-green-600 transition-all"
          onClick={() => navigate('/upload')}
        >
          <AiOutlinePlusCircle className="text-3xl" />
          <span className="hidden md:inline">Create Post</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
