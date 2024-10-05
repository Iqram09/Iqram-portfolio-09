import React from "react";
/* eslint-disable @next/next/no-img-element */

const ProfileImage: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
      <div className="flex relative flex-col grow items-start px-20 min-h-[1022px] max-md:mt-10 max-md:max-w-full">
        {/* Combined Background image */}
        <img
          loading="lazy"
          src="/BG.svg"  // Ensure this path is correct
          alt="Iqram Patel Background with Gojo"
          className="object-cover absolute inset-0 w-full h-full z-0" // Background image
        />
      </div>
    </div>
  );
};

export default ProfileImage;
/* eslint-disable @next/next/no-img-element */
