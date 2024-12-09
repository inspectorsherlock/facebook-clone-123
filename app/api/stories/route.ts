import { NextResponse } from "next/server";

// Mock data for stories
const stories = [
  {
    id: 1,
    user: "John Doe",
    image: "/avatar transparent.jpg",
    timestamp: "2024-12-08T12:00:00Z",
  },
  {
    id: 2,
    user: "Jane Smith",
    image: "/avatar transparent.jpg",
    timestamp: "2024-12-08T14:00:00Z",
  },
  {
    id: 3,
    user: "Alex Johnson",
    image: "/avatar transparent.jpg",
    timestamp: "2024-12-08T16:00:00Z",
  },
];

export async function GET() {
  // Return mock data
  return NextResponse.json(stories);
}
