import Announcements from "./Announcements";
import Projects from "./Projects";

export default function Main() {
  return (
    <div className="main-container mt-4 bg-blue-100 py-4 shadow-xl">
      <Projects />
      <div className="news-container">
        <Announcements />

        <div>
          <h2 className="mb-2 ml-4 font-semibold sm:text-lg">Trending</h2>
        </div>
      </div>
    </div>
  );
}
