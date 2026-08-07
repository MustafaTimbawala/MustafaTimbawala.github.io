import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section
      className="w-full py-[100px] px-[7.5vw] border-t border-bd"
      id="Projects"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-0.5 rounded-full bg-ac" />
            <span className="text-[13px] font-semibold tracking-wide text-ac">
              Work
            </span>
          </div>
          <h2 className="font-body font-bold text-3xl md:text-[38px] tracking-tight text-tx">
            What I've built
          </h2>
          <p className="font-text text-[15.5px] text-tx2 mt-2.5">
            A few projects where I owned the problem end to end.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
