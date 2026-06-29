import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
export default function ProjectsPage() {
  return (
    <section
      className="w-full flex flex-col items-center justify-start px-[7.5vw] mb-[25vh]"
      id="Projects"
    >
      <div>
        <p className="font-body text-5xl font-medium py-[5vh]">
          Projects
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
