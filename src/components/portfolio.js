import { projects } from "../utils/projects";

export default function Portfolio() {
  return (
    <>
      <div className="mx-[10%] my-5 md:mx-[25%] md:my-24 text-navy">
        <h1 className="mb-5 text-2xl md:text-5xl">Welcome to my portfolio.</h1>
        <h2 className="text-xl md:text-2xl">
          Here I have some projects I've been coding during my learning path. I
          have some clones and projects using Responsive Web Design, Front End
          Libraries (React.js), Data Visualization (D3.js), Backend Development
          (MongoDB, Node.js) and APIs and Quality Assurance Testing with Chai.
        </h2>
      </div>
      <div className="bg-navylight">
        <div>
          <p className="text-xl md:text-5xl text-center text-white pt-[5%] pb-[5%] md:pt-[3%] md:pb-[3%]">
            Projects
          </p>
          {projects.map((project) => {
            return (
              <div
                key={project.key}
                className="bg-grey flex flex-col md:flex-row rounded-xl mx-[5%] md:mx-[10%] mb-10"
              >
                <div className="w-1/1 md:w-1/2">
                  <img
                    className="py-5 px-5 md:py-10 md:px-10 rounded-[25px] md:rounded-[50px]"
                    src={project.image}
                    alt={`${project.title} project`}
                  />
                </div>
                <div className="py-5 px-5 w-1/1 md:w-1/2 text-navy md:flex md:flex-col md:justify-center ">
                  <p className="text-2xl font-bold">{project.title}</p>
                  <p>{project.description}</p>
                  <br />
                  <p className="font-bold">Technologies used:</p>
                  <p>{project.technologies}</p>
                  <br />
                  <div className="flex">
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="bg-navylight hover:bg-navy text-white font-bold py-2 px-4 rounded-full mr-5"
                      href={project.link}
                    >
                      {" "}
                      Live
                    </a>
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="bg-navylight hover:bg-navy text-white font-bold py-2 px-4 rounded-full"
                      href={project.github}
                    >
                      Repo
                    </a>
                  </div>
                  <p></p>
                </div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
}
