const ProjectCard = ({ project }) => {
  return (
    <article className="bg-surf border border-bd rounded-2xl overflow-hidden shadow-[0_1px_0_rgba(255,255,255,.03),0_18px_40px_-22px_rgba(0,0,0,.6)] flex flex-col">
      <div className="relative h-[104px] border-b border-bd bg-gradient-to-b from-surf2 to-surf">
        <div className="absolute -right-7 -top-7 w-[98px] h-[98px] rounded-full border border-acb" />
        <div className="absolute -right-3 -top-3 w-16 h-16 rounded-full border border-acb opacity-50" />
        <div className="absolute right-3.5 top-8 w-1.5 h-1.5 rounded-full bg-ac" />
      </div>

      <div className="p-5 pb-6 flex flex-col gap-3 flex-1">
        <h3 className="font-body font-bold text-[19px] md:text-[22px] text-tx">
          {project.name}
        </h3>
        <p className="font-text text-[14.5px] leading-[1.55] text-tx2">
          {project.blurb}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[12.5px] font-medium bg-acd text-ac border border-acb"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex-1" />
        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-11 px-4 rounded-lg border border-bd2 text-tx text-[13.5px] font-semibold hover:border-ac hover:text-ac transition-colors"
          >
            GitHub
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l6-6M5.5 4H10v4.5" /></svg>
          </a>
          {project.hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-11 px-4 rounded-lg bg-acd border border-acb text-ac text-[13.5px] font-semibold hover:bg-ac hover:text-white hover:border-ac transition-colors"
            >
              Live demo
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l6-6M5.5 4H10v4.5" /></svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
