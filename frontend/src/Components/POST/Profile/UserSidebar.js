// src/components/UserSidebar.js
import React from 'react';

const UserSidebar = ({ username, totalLikes, totalPosts, accountAge, comments }) => {
  return (
    <div className="p-4 bg-purple-700 text-white rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <img
          src="/path/to/user-logo.png" // Placeholder profile picture
          alt="User"
          className="w-16 h-16 rounded-full mx-auto"
        />
        <h3 className="text-2xl font-bold">{username}</h3>
      </div>
      <ul className="space-y-4">
        <li>Total Likes: {totalLikes}</li>
        <li>Total Posts: {totalPosts}</li>
        <li>Account Age: {accountAge} days</li>
        <li>Total Comments: {comments}</li>
      </ul>
    </div>
  );
};

export default UserSidebar;
