export default function SkillsSection() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start px-[7.5vw] md:h-screen">
      <div className="pb-[10vh] pt-4">
        <p className="font-body text-5xl text-highlight font-medium">Skills</p>
      </div>
      <div className="flex flex-col items-center justify-around w-full md:flex-row">
        <div>
          <p className=" font-medium text-3xl">Full Stack Dev</p>
          <div className="flex flex-col h-[60vh] justify-evenly">
            <div>
              <p className="text-highlight text-lg pb-1">Languages</p>
              <p className="font-semibold w-3/4">
                JavaScript, Python, Java, TypeScript
              </p>
            </div>
            <div>
              <p className="text-highlight text-lg pb-1">Frameworks</p>
              <p className="font-semibold w-3/4">
                React, Node.js, Express, Flask
              </p>
            </div>
            <div>
              <p className="text-highlight text-lg pb-1">Databases</p>
              <p className="font-semibold w-3/4">
                MongoDB, PostgreSQL, Firebase, AWS S3, MySQL
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className=" font-medium text-3xl">UI & UX</p>
          <div className="flex flex-col h-[60vh] justify-evenly">
            <div>
              <p className="text-highlight text-lg">Tools</p>
              <p className="font-semibold w-3/4">Figma</p>
            </div>
            <div>
              <p className="text-highlight text-lg"> Libraries</p>
              <p className="font-semibold w-3/4">
                Material-UI, TailwindCSS, ChakraUI, BootStrap
              </p>
            </div>
            <div>
              <p className="text-highlight text-lg">Design Principles</p>
              <p className="font-semibold w-3/4">
                Responsive, Intuitive, User-Centric, Efficient
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className=" font-medium text-3xl">Mobile Dev</p>
          <div className="flex flex-col h-[60vh] justify-evenly">
            <div>
              <p className=" text-highlight text-lg">Languages </p>
              <p className="font-semibold w-3/4">Java,TypeScript, Kotlin</p>
            </div>
            <div>
              <p className="text-highlight text-lg">Frameworks</p>
              <p className="font-semibold w-3/4">
                React Native, Expo, Android Studio
              </p>
            </div>
            <div>
              <p className="text-highlight text-lg">Tools</p>
              <p className="font-semibold w-3/4">
                Android Studio, Jira, Git, MongoDB, Firebase,
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85vw] h-px mt-[10vh] bg-highlight"></div>
    </section>
  );
}
