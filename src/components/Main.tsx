import Projects from "./Projects";

export default function Main() {
  return (
    <div className="main-container mt-4 min-h-screen bg-blue-100 py-4 shadow-xl">
      <Projects />
      <div>
        <h1>Announcements</h1>
      </div>
      <div>
        <h1>Trending</h1>
      </div>
    </div>
  );
}
