import { projectsData } from "../constants/projectsData";

export default function Projects() {
  return (
    <div className="project-container">
      <h1 className="mb-2 ml-4 font-medium">Your Projects</h1>
      {projectsData.map((project) => (
        <div
          className="grid grid-cols-project-card grid-rows-project-card  px-4"
          key={project.id}
        >
          <div className="h-full w-full rounded-l-3xl bg-gradient-to-b from-[#009fff] to-[#ec2f4b]"></div>
          <div className="">
            <img
              src={project.imgCover}
              alt={project.title}
              className="rounded-tr-xl"
            />
            <div className="grid grid-cols-2 rounded-br-xl bg-white px-2 py-2">
              <h2 className="mx-auto">{project.title}</h2>
              <div className="flex items-center justify-evenly">
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
