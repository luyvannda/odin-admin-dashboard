import { projectsData } from "../constants/projectsData";

export default function Projects() {
  return (
    <div className="project-container">
      <h1 className="font-medium">Your Projects</h1>
      {projectsData.map((project) => (
        <div
          className="grid grid-cols-project-card grid-rows-project-card"
          key={project.id}
        >
          <div className="h-full w-full bg-gradient-to-b from-[#009fff] to-[#ec2f4b]"></div>
          <div className="">
            <img src={project.imgCover} alt={project.title} />
            <div className="grid grid-cols-2 bg-white pt-2">
              <h2 className="mx-auto">{project.title}</h2>
              <div className="mx-auto">
                <span className="material-icons">bookmark_add</span>
                <span className="material-icons">delete</span>
                <span className="material-icons">share</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
