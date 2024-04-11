import Projects from "./Projects";
import { announcement } from "../constants";

export default function Main() {
  return (
    <div className="main-container mt-4 bg-blue-100 py-4 shadow-xl">
      <Projects />
      <div className="news-container">
        <div>
          <h2 className="mb-2 ml-4 font-medium">Announcements</h2>
          <div className="mx-4 h-fit rounded-lg bg-white shadow-md">
            {announcement.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-2 ml-4 font-medium">Trending</h2>
        </div>
      </div>
    </div>
  );
}
