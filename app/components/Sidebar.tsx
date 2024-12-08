import Link from "next/link";
import Image from "next/image";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineBook,
  AiOutlineAppstore,
  AiOutlineVideoCamera,
  AiOutlineShop,
  AiOutlineBars,
} from "react-icons/ai";

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
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineClockCircle className="text-xl mr-4" />
            Memories
          </button>
        </li>

        {/* Saved */}
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineBook className="text-xl mr-4" />
            Saved
          </button>
        </li>

        {/* Groups */}
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineAppstore className="text-xl mr-4" />
            Groups
          </button>
        </li>

        {/* Videos */}
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineVideoCamera className="text-xl mr-4" />
            Video
          </button>
        </li>

        {/* Marketplace */}
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineShop className="text-xl mr-4" />
            Marketplace
          </button>
        </li>

        {/* Feeds */}
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineBars className="text-xl mr-4" />
            Feeds
          </button>
        </li>

        {/* See More */}
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineBars className="text-xl mr-4" />
            See more
          </button>
        </li>
      </ul>

      {/* Shortcuts Section */}
      <div className="mt-6">
        <h2 className="text-gray-400 text-sm font-medium mb-3">
          Your shortcuts
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
            <Image
              src="/8 Ball Pool Logo.png"
              alt="8 Ball Pool"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>8 Ball Pool</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
            <Image
              src="/candy crush saga.png"
              alt="Candy Crush Saga"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>Candy Crush Saga</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
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
