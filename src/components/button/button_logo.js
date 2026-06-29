 import React from "react";


const SocialButton = ({
  text,
  href,
  size = 56,
  className = "",
}) => {
  const displayText = text.slice(0, 2);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-2xl
        border
        border-black
        text-black
        font-semibold
        transition-all
        duration-200
        hover:bg-black
        hover:text-white
        hover:-translate-y-0.5
        active:translate-y-0
        ${className}
      `}
      style={{
        width: size,
        height: size,
      }}
    >
      {displayText}
    </a>
  );
};

export default SocialButton;