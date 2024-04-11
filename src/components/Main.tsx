import Announcements from "./Announcements";
import Projects from "./Projects";
import Trending from "./Trending";

export default function Main() {
  return (
    <div className="main-container mt-4 bg-blue-100 py-4 shadow-xl">
      <Projects />
      <div className="news-container">
        <Announcements />
        <Trending />
      </div>
    </div>
  );
}
