import { projectsData } from "../constants/projectsData";

export default function Projects() {
  return (
    <>
      <h1 className="mb-2 ml-4 font-semibold sm:text-lg">Your Projects</h1>
      <div className="project-container">
        {projectsData.map((project) => (
          <div
            className="grid transform grid-cols-project-card grid-rows-project-card px-4 transition-transform duration-300 hover:scale-[103%] md:px-0 md:pl-3"
            key={project.id}
          >
            <a href={project.livePreview} target="_blank">
              <div className="h-full w-full rounded-l-3xl bg-gradient-to-b from-[#009fff] to-[#ec2f4b] shadow-md"></div>
            </a>
            <div>
              <a href={project.livePreview} target="_blank">
                <img
                  src={project.imgCover}
                  alt={project.title}
                  className="rounded-tr-xl shadow-md"
                />
              </a>
              <div className="grid grid-cols-2 rounded-br-xl border-t-[1px] border-gray-100 bg-white px-2 py-2 shadow-md">
                <h2 className="mx-auto hover:text-green-500">
                  <a href={project.sourceCode} target="_blank">
                    {project.title}
                  </a>
                </h2>
                <div className="flex items-center justify-evenly">
                  <a href={project.sourceCode} target="_blank">
                    <span className="material-icons cursor-pointer hover:text-green-500">
                      bookmark_add
                    </span>
                  </a>
                  <a href={project.sourceCode} target="_blank">
                    <span className="material-icons cursor-pointer hover:text-green-500">
                      delete
                    </span>
                  </a>

                  <a href={project.sourceCode} target="_blank">
                    <span className="material-icons cursor-pointer hover:text-green-500">
                      share
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
