import Link from "next/link";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineVideoCamera,
  AiOutlineShop,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 h-full w-64 bg-gray-900 text-gray-300 flex flex-col py-4">
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          >
            <AiFillHome className="text-xl mr-4" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/friends"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
          >
            <AiOutlineUser className="text-xl mr-4" />
            Friends
          </Link>
        </li>
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineVideoCamera className="text-xl mr-4" />
            Videos
          </button>
        </li>
        <li>
          <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md">
            <AiOutlineShop className="text-xl mr-4" />
            Marketplace
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
