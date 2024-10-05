import React from "react";

interface SkillItemProps {
  imageSrc: string;
  skillName: string;
}
/* eslint-disable @next/next/no-img-element */
const SkillItem: React.FC<SkillItemProps> = ({ imageSrc, skillName }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt={skillName} className="h-12 w-12" />
      <p className="mt-2 text-center">{skillName}</p>
    </div>
  );
};

export default SkillItem;
/* eslint-disable @next/next/no-img-element */