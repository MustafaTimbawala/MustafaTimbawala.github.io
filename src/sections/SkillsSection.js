import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  return (
    <section
      id="Skills"
      className="w-full py-[100px] px-[7.5vw] border-t border-bd scroll-mt-[74px]"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="w-5 h-0.5 rounded-full bg-ac" />
            <span className="text-[13px] font-semibold tracking-wide text-ac">
              Skills
            </span>
          </div>
          <h2 className="font-body font-bold text-3xl md:text-[38px] tracking-tight text-tx">
            What I work with
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="bg-surf border border-bd rounded-xl px-4.5 pt-4.5 pb-5"
            >
              <div className="text-[13px] font-semibold tracking-wide text-tx3 mb-3.5">
                {group.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-[13.5px] font-medium bg-surf2 text-tx border border-bd"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
