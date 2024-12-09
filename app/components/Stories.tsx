"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Define the Story type
interface Story {
  id: number;
  user: string;
  image: string;
  timestamp: string;
}

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]); // Use the Story type
  const [activeStory, setActiveStory] = useState<Story | null>(null); // Story or null for the modal

  useEffect(() => {
    // Fetch stories from the backend
    fetch("/api/stories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        return response.json();
      })
      .then((data: Story[]) => setStories(data)) // Explicitly type the fetched data
      .catch((error) => console.error("Error fetching stories:", error));
  }, []);

  const handleStoryClick = (story: Story) => {
    setActiveStory(story); // Open the story modal
  };

  const handleAddStory = () => {
    // Logic to add a new story
    console.log("Add story clicked!");
  };

  return (
    <div className="stories-container bg-gray-900 p-4 rounded-lg">
      {/* Heading */}
      <h2 className="text-white text-xl font-bold mb-4">Stories</h2>

      {/* Add Story Button */}
      <div
        className="create-story flex items-center justify-center bg-gray-700 rounded-full w-20 h-20 cursor-pointer"
        onClick={handleAddStory}
      >
        <p className="text-white text-2xl font-bold">+</p>
      </div>

      {/* Stories Carousel */}
      <div className="flex overflow-x-scroll space-x-4 mt-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="story-item flex-shrink-0 w-20 h-20 rounded-full overflow-hidden cursor-pointer"
            onClick={() => handleStoryClick(story)}
          >
            <Image
              src={story.image}
              width={80}
              height={80}
              alt={story.user}
              className="object-cover rounded-full"
            />
            <p className="text-center text-white text-xs mt-2">{story.user}</p>
          </div>
        ))}
      </div>

      {/* Story Viewer Modal */}
      {activeStory && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="modal-content bg-white p-4 rounded-lg relative">
            <Image
              src={activeStory.image}
              width={400}
              height={400}
              alt={activeStory.user}
              className="rounded-lg"
            />
            <p className="text-gray-800 text-center font-bold mt-2">
              {activeStory.user}
            </p>
            <p className="text-gray-600 text-center text-sm">
              {new Date(activeStory.timestamp).toLocaleString()}
            </p>
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;
