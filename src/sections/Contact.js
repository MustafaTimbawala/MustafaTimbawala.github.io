export default function Contact() {
  const email = "mm.timbawala@gmail.com";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  return (
    <section
      id="Contact"
      className="w-full py-[100px] px-[7.5vw] border-t border-bd text-center scroll-mt-[74px]"
    >
      <div className="max-w-[620px] mx-auto">
        <div className="inline-flex items-center gap-2.5 mb-4">
          <span className="w-5 h-0.5 rounded-full bg-ac" />
          <span className="text-[13px] font-semibold tracking-wide text-ac">
            Contact
          </span>
        </div>
        <h2 className="font-body font-bold text-3xl md:text-[38px] tracking-tight text-tx">
          Let's build something.
        </h2>
        <p className="font-text text-base leading-[1.6] text-tx2 mt-4 max-w-[38em] mx-auto">
          Open to full-time software engineering roles starting 2026. If
          you're hiring backend, full-stack, or mobile — I'd love to talk.
        </p>
        <button
          onClick={handleCopy}
          className="inline-block font-body font-bold text-xl md:text-[22px] text-tx mt-6.5 border-b-[1.5px] border-ac pb-1 hover:text-ac transition-colors"
        >
          {email}
        </button>
        <div className="flex gap-5 justify-center mt-6.5">
          <a
            href="https://github.com/MustafaTimbawala/MustafaTimbawala"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-tx2 hover:text-ac transition-colors"
          >
            GitHub
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l6-6M5.5 4H10v4.5" /></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mustafa-timbawala/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-tx2 hover:text-ac transition-colors"
          >
            LinkedIn
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l6-6M5.5 4H10v4.5" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
