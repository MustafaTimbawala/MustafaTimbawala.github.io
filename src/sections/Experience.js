import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="Experience"
      className="w-full py-[100px] px-[7.5vw] border-t border-bd scroll-mt-[74px]"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-0.5 rounded-full bg-ac" />
            <span className="text-[13px] font-semibold tracking-wide text-ac">
              Experience
            </span>
          </div>
          <h2 className="font-body font-bold text-3xl md:text-[38px] tracking-tight text-tx">
            Where I've worked
          </h2>
          <p className="font-text text-[15.5px] text-tx2 mt-2.5">
            Internships and team projects shipping production software.
          </p>
        </div>
        <div className="max-w-[760px]">
          {experiences.map((exp, index) => (
            <ExperienceCard experience={exp} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
