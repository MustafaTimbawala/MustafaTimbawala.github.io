import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience"; 

export default function ExperienceSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Experience</h2>

      <div className="relative border-l border-gray-300">
        {experiences.map((exp, index) => (
          <ExperienceCard experience={exp} key={index}/>
        ))}
      </div>
    </section>
  );
}