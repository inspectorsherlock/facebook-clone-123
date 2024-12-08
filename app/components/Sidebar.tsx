import Link from "next/link";
import Image from "next/image";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineVideoCamera,
  AiOutlineShop,
  AiOutlineClockCircle,
  AiOutlineAppstore,
} from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineFeed } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 h-full w-64 bg-gray-900 text-gray-300 flex flex-col py-4 overflow-y-auto shadow-md">
      <ul className="space-y-4">
        {/* Home Link */}
        <li>
          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          >
            <AiFillHome className="text-xl mr-4" />
            Home
          </Link>
        </li>

        {/* Friends Link */}
        <li>
          <Link
            href="/friends"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          >
            <AiOutlineUser className="text-xl mr-4" />
            Friends
          </Link>
        </li>

        {/* Memories */}
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineClockCircle className="text-blue-500 text-xl" />
          <span>Memories</span>
        </li>

        {/* Saved */}
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <BiBookBookmark className="text-blue-500 text-xl" />
          <span>Saved</span>
        </li>

        {/* Groups */}
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineAppstore className="text-blue-500 text-xl" />
          <span>Groups</span>
        </li>

        {/* Videos */}
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineVideoCamera className="text-blue-500 text-xl" />
          <span>Video</span>
        </li>

        {/* Marketplace */}
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineShop className="text-blue-500 text-xl" />
          <span>Marketplace</span>
        </li>

        {/* Feeds */}
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <MdOutlineFeed className="text-blue-500 text-xl" />
          <span>Feeds</span>
        </li>

        {/* See More */}
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <BsThreeDots className="text-gray-400 text-xl" />
          <span>See more</span>
        </li>
      </ul>

      {/* Shortcuts Section */}
      <div className="mt-6">
        <h2 className="text-gray-400 text-sm font-medium mb-3">
          Your shortcuts
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <Image
              src="/8 Ball Pool Logo.png"
              alt="8 Ball Pool"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>8 Ball Pool</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <Image
              src="/candy crush saga.png"
              alt="Candy Crush Saga"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>Candy Crush Saga</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <Image
              src="/words with friends logo.jpeg"
              alt="Words With Friends"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>Words With Friends</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
