import Feed from "./components/Feed";
import Stories from "./components/Stories";

export default function Home() {
  return (
    <div className="home-page flex flex-col space-y-6 p-4">
      {/* Stories Component */}
      <Stories />

      {/* Feed Component */}
      <Feed />
    </div>
  );
}
