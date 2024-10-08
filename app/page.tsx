import React from "react";
import SocialIcons from "./components/ProfilePage/SocialIcons";
import ProfileImage from "./components/ProfilePage/ProfileImage";
import Header from "./components/about_me/Header";
import Content from "./components/about_me/Content";
import Divider from "./components/about_me/Divider";
import SkillsSection from "./components/SkillsSection/SkillsSection"; // Import SkillsSection
/* eslint-disable @next/next/no-img-element */
const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <main className="flex overflow-hidden flex-col w-full bg-black max-md:max-w-full">
        {/* Section for Intro with Logo and Profile Image */}
        <section className="overflow-hidden pl-20 bg-zinc-300 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Left side with logo and intro */}
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="/logo.svg"
                  alt="Logo"
                  className="object-contain w-48 max-w-full aspect-[4.46]"
                />
                <div className="flex flex-col items-start pl-16 mt-64 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <h1 className="text-4xl font-bold text-center text-black">
                    Hi, I am
                  </h1>
                  <h2 className="mt-14 text-7xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                    Iqram Patel
                  </h2>
                  <p className="mt-6 text-2xl font-extrabold text-neutral-400">
                    Software Developer
                  </p>
                  <SocialIcons />
                </div>
              </div>
            </div>
            {/* Right side with Profile Image */}
            <ProfileImage />
          </div>
        </section>

        {/* Additional sections for content */}
        <section className="flex overflow-hidden flex-col items-start px-20 pt-9 pb-14 text-white bg-stone-900 max-md:px-5">
          <div className="flex flex-col items-start w-full max-w-[1402px] max-md:max-w-full">
            <Header />
            <Content />
            <Divider />
          </div>
        </section>
      </main>
      {/* SkillsSection takes full screen height */}
      <SkillsSection />
    </div>
  );
};

export default ProfilePage;
/* eslint-disable @next/next/no-img-element */