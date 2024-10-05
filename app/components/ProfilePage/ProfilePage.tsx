import React from "react";
import SocialIcons from "./SocialIcons";
import ProfileImage from "./ProfileImage";
/* eslint-disable @next/next/no-img-element */
const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <main className="flex overflow-hidden flex-col w-full bg-black max-md:max-w-full">
        <section className="overflow-hidden pl-20 bg-zinc-300 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/68de247f79da8ab0b243dd6714a23d2070b98c3cf866b33ef602e81be071940f?placeholderIfAbsent=true&apiKey=89d69015c1cf42f4af9d3f76f9fde868"
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
            <ProfileImage />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
/* eslint-disable @next/next/no-img-element */