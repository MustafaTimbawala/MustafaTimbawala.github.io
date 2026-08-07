export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-6.5 px-[7.5vw] border-t border-bd text-center">
      <span className="text-[13px] text-tx3">
        © {year} Mustafa Timbawala · Designed and built in Toronto.
      </span>
    </footer>
  );
};
