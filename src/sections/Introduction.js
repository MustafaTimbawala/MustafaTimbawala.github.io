import SunRing from "../components/SunRing";
export default function Introduction() {
  return (
    <section id="home" className="w-full px-[7.5vw] pt-[70px] pb-[92px] scroll-mt-[74px]">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-14 items-center">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-ac" />
            <span className="text-[13px] font-medium tracking-wide text-tx3">
              Toronto, Canada — available 2026
            </span>
          </div>
          <h1 className="font-body font-extrabold text-[42px] md:text-[64px] leading-[1.02] tracking-tight text-tx">
            Mustafa Timbawala
          </h1>
          <p className="font-text font-medium text-lg md:text-[19px] text-ac mt-3.5">
            Software Engineer — Backend, Full-Stack &amp; Mobile
          </p>
          <p className="font-text text-base leading-[1.62] text-tx2 max-w-[30em] mt-5">
            I'm a fourth-year Computer Science student at the University of
            Toronto who enjoys building reliable software. I care about clean
            APIs, consistent data models, and systems that stay fast and
            maintainable as they grow. Through two software engineering
            internships, I've shipped backend, full-stack, and mobile
            features, and I'm looking for a team where I can own features
            end to end.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#Projects"
              className="inline-flex items-center justify-center h-[50px] px-6 rounded-[10px] bg-ac text-white font-semibold text-[15px] shadow-[0_10px_24px_-10px_rgba(74,140,255,.7)] hover:bg-ac2 transition-colors"
            >
              View my work
            </a>
            <a
              href="/Mustafa_Timbawala_Resume.pdf"
              download
              className="inline-flex items-center gap-2 h-[50px] px-5 rounded-[10px] border border-bd2 text-tx font-semibold text-[15px] hover:border-ac hover:text-ac transition-colors"
            >
              Download resume
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2.5v8M4.5 7l3.5 3.5L11.5 7M3 13h10" /></svg>
            </a>
          </div>
          <div className="flex gap-2.5 mt-6">
            <a
              href="https://github.com/MustafaTimbawala/MustafaTimbawala"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-[11px] border border-bd2 text-tx2 font-body font-bold text-[13.5px] hover:text-ac hover:border-ac transition-colors"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-timbawala/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-[46px] h-[46px] rounded-[11px] border border-bd2 text-tx2 font-body font-bold text-[13.5px] hover:text-ac hover:border-ac transition-colors"
            >
              in
            </a>
          </div>
        </div>

        <SunRing />
      </div>
    </section>
  );
}
