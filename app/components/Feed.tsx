"use client";

import { useState, useEffect } from "react";

interface Status {
  id: string;
  content: string;
  timestamp: string;
}

const Feed = () => {
  const [content, setContent] = useState("");
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  // Fetch existing statuses
  const fetchStatuses = async () => {
    try {
      const response = await fetch("/api/postStatus");
      const data = await response.json();
      if (response.ok) {
        setStatuses(data);
      } else {
        console.error("Failed to fetch statuses:", data.message);
      }
    } catch (error) {
      console.error("Error fetching statuses:", error);
    }
  };

  useEffect(() => {
    fetchStatuses();
  }, []);

  // Handle new status posting
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/postStatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await response.json();

      if (response.ok) {
        setContent("");
        fetchStatuses(); // Refresh statuses
      } else {
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error posting status:", error);
    }
  };

  // Handle status deletion
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this status?")) {
      return;
    }

    try {
      const response = await fetch("/api/postStatus", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (response.ok) {
        fetchStatuses(); // Refresh statuses
      } else {
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error deleting status:", error);
    }
  };

  // Handle status editing
  const handleEdit = (id: string, currentContent: string) => {
    setEditingId(id);
    setEditContent(currentContent);
  };

  // Handle status update submission
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/postStatus", {
        method: "PUT", // Assuming you have a PUT API endpoint for updates
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, content: editContent }),
      });

      const data = await response.json();

      if (response.ok) {
        setEditingId(null);
        setEditContent("");
        fetchStatuses(); // Refresh statuses
      } else {
        console.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto bg-gray-800 p-6 rounded-md shadow-md">
      {/* Posting Form */}
      <div className="w-full bg-gray-700 p-4 rounded-md shadow-md mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full bg-gray-600 text-gray-300 p-3 rounded-md resize-none"
          rows={3}
        />
        <button
          onClick={handleSubmit}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Post
        </button>
      </div>

      {/* Displaying Status Updates */}
      <div className="w-full">
        {statuses.length > 0 ? (
          statuses.map((status) => (
            <div
              key={status.id}
              className="bg-gray-700 text-gray-300 p-4 rounded-md shadow-md mb-4"
            >
              {editingId === status.id ? (
                // Edit Form
                <form onSubmit={handleUpdate}>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full bg-gray-600 text-gray-300 p-3 rounded-md resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end space-x-2 mt-3">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(null);
                        setEditContent("");
                      }}
                      className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                // Normal View
                <>
                  <p className="text-gray-200">{status.content}</p>
                  <div className="flex justify-end space-x-2 mt-3">
                    <button
                      onClick={() => handleEdit(status.id, status.content)}
                      className="px-4 py-1 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(status.id)}
                      className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">
            No statuses available. Be the first to post!
          </p>
        )}
      </div>
    </div>
  );
};

export default Feed;
