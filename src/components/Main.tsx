import Announcements from "./Announcements";
import Projects from "./Projects";
import Trending from "./Trending";

export default function Main() {
  return (
    <div>
      <div className="main-container mt-4 bg-blue-100 py-4 shadow-xl">
        <h1 className="mb-2 ml-4 font-semibold sm:text-lg">Your Projects</h1>
        <Projects />
        <div className="news-container">
          <Announcements />
          <Trending />
        </div>
      </div>
    </div>
  );
}
