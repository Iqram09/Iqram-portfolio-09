import React from "react";
import GmailIcon from '../img/gmail.svg';
import GithubIcon from '../img/github.svg';
import LinkIcon from '../img/link.svg';
/* eslint-disable @next/next/no-img-element */
const SocialIcons: React.FC = () => {
  const icons = [
    { id: 1, imgSrc: GmailIcon.src, altText: "Gmail Icon", url: "https://www.instagram.com/ig_iqram_09/" },
    { id: 2, imgSrc: GithubIcon.src, altText: "Github Icon", url: "https://github.com/Iqram09" },
    { id: 3, imgSrc: LinkIcon.src, altText: "Link Icon", url: "https://www.linkedin.com/in/iqram-patel09/" }, // Update with your link
  ];

  return (
    <div className="flex gap-8 mt-36 max-md:mt-10">
      {icons.map((icon) => (
        <a
          key={icon.id}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-stone-300 shadow-md rounded-full w-16 h-16"
        >
          <img
            src={icon.imgSrc}
            alt={icon.altText}
            className="object-contain h-8 w-8" // Adjust icon size
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
/* eslint-disable @next/next/no-img-element */