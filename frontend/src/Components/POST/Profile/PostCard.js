// src/components/PostCard.js
import React from 'react';
import { AiOutlineHeart, AiOutlineComment, AiOutlineUserAdd } from 'react-icons/ai';

const PostCard = ({ title, description, image, likes, comments }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-red-600">
              <AiOutlineHeart className="mr-1" />
              {likes} Likes
            </button>
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <AiOutlineComment className="mr-1" />
              {comments} Comments
            </button>
          </div>
          <button className="flex items-center text-gray-600 hover:text-green-600">
            <AiOutlineUserAdd className="mr-1" />
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
