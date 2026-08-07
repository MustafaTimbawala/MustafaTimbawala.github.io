import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#Projects", label: "Projects" },
    { href: "#Experience", label: "Experience" },
    { href: "#Skills", label: "Skills" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-bd w-full">
      <div className="max-w-[1120px] mx-auto px-5 md:px-14 h-[62px] flex items-center justify-between">
        <a
          href="#home"
          className="inline-flex items-center justify-center w-10 h-10 border border-bd2 rounded-[10px] font-body font-extrabold text-[15px] tracking-wide text-tx"
        >
          MT
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-tx2 hover:text-tx transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Mustafa_Timbawala_Resume.pdf"
            download
            className="inline-flex items-center gap-2 h-[38px] px-3.5 border border-bd2 rounded-[9px] text-tx2 text-[13px] font-medium hover:text-tx hover:border-ac transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex flex-col justify-center items-center gap-1.5 w-11 h-11 border border-bd2 rounded-[10px]"
        >
          <span className="w-[18px] h-[1.8px] bg-tx rounded-sm" />
          <span className="w-[18px] h-[1.8px] bg-tx rounded-sm" />
          <span className="w-[18px] h-[1.8px] bg-tx rounded-sm" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-bd px-5 pt-2 pb-3.5 flex flex-col bg-bg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="h-[50px] flex items-center text-base text-tx border-b border-bd"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Mustafa_Timbawala_Resume.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="h-[50px] flex items-center text-base text-tx"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
