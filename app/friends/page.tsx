"use client";

import Image from "next/image";
import { useState } from "react";

const Friends = () => {
  // Dummy Data for Friends
  const initialFriends = [
    { id: 1, name: "John Doe", status: "Online", avatar: "/avatar1.png" },
    { id: 2, name: "Jane Smith", status: "Offline", avatar: "/avatar2.png" },
    { id: 3, name: "Alex Johnson", status: "Online", avatar: "/avatar3.png" },
    { id: 4, name: "Chris Lee", status: "Busy", avatar: "/avatar4.png" },
    { id: 5, name: "Emily Davis", status: "Away", avatar: "/avatar5.png" },
  ];

  const [friends, setFriends] = useState(initialFriends);

  const handleAddFriend = (id: number) => {
    setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== id));
    alert(`Friend with ID ${id} added!`);
  };
  

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 px-8">
      {/* Friends Content Wrapper */}
      <div className="w-full max-w-4xl bg-gray-900 p-6 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Friends</h1>
        <p className="text-lg text-gray-300 text-center mb-8">
          Welcome to the Friends page. Here you can view and manage your
          friends.
        </p>

        {/* Friends List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex flex-col items-center bg-gray-700 p-4 rounded-md shadow-md"
            >
              <Image
                src={friend.avatar}
                alt={`${friend.name}'s avatar`}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h3 className="text-white text-xl font-bold mt-4">
                {friend.name}
              </h3>
              <p
                className={`mt-2 ${
                  friend.status === "Online"
                    ? "text-green-500"
                    : friend.status === "Offline"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {friend.status}
              </p>
              <button
                onClick={() => handleAddFriend(friend.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add Friend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
