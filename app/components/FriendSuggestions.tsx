"use client";

import Image from "next/image";
import React from "react";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
}

const FriendSuggestions = () => {
  const friends: Friend[] = [
    {
      id: "1",
      name: "John Doe",
      avatar: "/default-avatar.png",
      mutualFriends: 3,
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: "/default-avatar.png",
      mutualFriends: 5,
    },
    {
      id: "3",
      name: "Alex Johnson",
      avatar: "/default-avatar.png",
      mutualFriends: 1,
    },
  ];

  const handleAddFriend = (id: string) => {
    console.log(`Add friend with id: ${id}`);
    // Implement actual friend request functionality here
  };

  return (
    <div className="w-64 bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-white font-bold text-lg mb-4">Friend Suggestions</h2>
      <ul>
        {friends.map((friend) => (
          <li
            key={friend.id}
            className="flex items-center justify-between mb-4 bg-gray-700 p-3 rounded-md"
          >
            <div className="flex items-center">
              <Image
                src={friend.avatar}
                alt={`${friend.name}'s avatar`}
                width={40} // Specify width
                height={40} // Specify height
                className="rounded-full mr-3"
              />
              <div>
                <p className="text-white font-bold">{friend.name}</p>
                <p className="text-gray-400 text-sm">
                  {friend.mutualFriends} mutual friends
                </p>
              </div>
            </div>
            <button
              onClick={() => handleAddFriend(friend.id)}
              className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendSuggestions;
