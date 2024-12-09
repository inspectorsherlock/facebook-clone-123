"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiOutlineVideoCamera,
  AiOutlineShop,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaFacebook, FaBell, FaUserCircle } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, message: "John Doe sent you a friend request." },
    { id: 2, message: "Jane Smith liked your post." },
    { id: 3, message: "Alex Johnson commented on your status." },
  ];

  // Close dropdown if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 flex items-center px-4 shadow-md z-50">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-4 flex-1">
        {/* Facebook Logo */}
        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
          <FaFacebook className="text-white text-2xl" />
        </div>
        {/* Search Bar */}
        <div className="flex items-center bg-gray-700 rounded-full px-3 py-1">
          <AiOutlineSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 bg-transparent outline-none text-gray-300 text-sm"
          />
        </div>
      </div>

      {/* Center Section: Navigation Icons */}
      <div className="flex space-x-6 flex-1 justify-center">
        <Link href="/">
          <AiFillHome className="text-blue-500 text-2xl cursor-pointer" />
        </Link>
        <Link href="/friends">
          <AiOutlineUsergroupAdd className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        </Link>
        <AiOutlineVideoCamera className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        <AiOutlineShop className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        <AiOutlinePlus className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <BsMessenger className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        <div className="relative" ref={dropdownRef}>
          <button
            className="relative focus:outline-none"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <FaBell className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
            {/* Notification Badge */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {notifications.length}
            </div>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-md z-50">
              <div className="p-3 border-b border-gray-700 text-lg font-bold">
                Notifications
              </div>
              <div className="max-h-60 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 hover:bg-gray-700 text-sm text-white"
                  >
                    {notification.message}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <FaUserCircle className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Navbar;
