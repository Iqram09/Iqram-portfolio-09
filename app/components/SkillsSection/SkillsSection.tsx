import React from "react";
import SkillItem from "./SkillItem";

interface Skill {
  name: string;
  imageSrc: string;
}

const skills: Skill[] = [
  {
    name: "C++",
    imageSrc: "C++.svg",
  },
  {
    name: "Python",
    imageSrc: "Python.svg"
  },
  {
    name: "Java",
    imageSrc: "Java.svg",
  },
  {
    name: "C#",
    imageSrc: "C-sharp.svg",
  },
  {
    name: "Javascript",
    imageSrc: "javscript.svg",
  },
  {
    name: "Typescript",
    imageSrc: "typescript.svg",
  },
  {
    name: "React",
    imageSrc: "icon-react.svg",
  },
  {
    name: "Next.js",
    imageSrc: "icon-nextjs.svg",
  },
  {
    name: "Node.js",
    imageSrc: "icon-nodejs.svg",
  },
  {
    name: "MongoDB",
    imageSrc: "icon-mongodb.svg",
  },
  {
    name: "Tailwindcss",
    imageSrc: "icon-tailwindcss.svg",
  },
  {
    name: "Figma",
    imageSrc: "icon-figma.svg",
  },
  {
    name: "Git",
    imageSrc: "icon-git.svg",
  },
  {
    name: "GitHub",
    imageSrc: "Github.svg",
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="flex flex-col text-gray-600 w-full bg-zinc-300 py-10"> {/* Reduced height and padding */}
      <div className="flex flex-col justify-center items-center w-full max-w-[1280px] mx-auto"> {/* Centered and limited width */}
        <div className="flex overflow-hidden flex-col px-8 w-full max-w-full">
          <header className="flex flex-col items-center w-full max-md:max-w-full text-center"> {/* Centered text */}
            <div className="flex overflow-hidden flex-col justify-center items-center w-full text-sm font-medium leading-none whitespace-nowrap max-md:max-w-full">
              <h2 className="self-stretch px-5 py-1 bg-gray-200 rounded-full text-3xl font-bold"> {/* Increased font size */}
                Skills
              </h2>
            </div>
            <p className="overflow-hidden mt-4 w-full max-w-xl text-2xl leading-snug max-md:max-w-full"> {/* Increased font size */}
              The skills, tools and technologies I am really good at:
            </p>
          </header>
          <div className="flex flex-col mt-6 w-full text-lg leading-loose whitespace-nowrap max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-10 justify-center w-full max-md:max-w-full"> {/* Centered skills */}
              {skills.slice(0, 8).map((skill) => (
                <SkillItem
                  key={skill.name}
                  imageSrc={skill.imageSrc}
                  skillName={skill.name}
                />
              ))}
            </div>
            <div className="flex overflow-hidden flex-wrap gap-10 justify-center mt-6 w-full max-md:mt-10 max-md:max-w-full"> {/* Centered skills */}
              {skills.slice(8).map((skill) => (
                <SkillItem
                  key={skill.name}
                  imageSrc={skill.imageSrc}
                  skillName={skill.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
