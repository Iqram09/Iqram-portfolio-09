import React from "react";
import Header from "./Header";
import Content from "./Content";
import Divider from "./Divider";

const MyComponent: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-start px-20 pt-9 pb-14 text-white bg-stone-900 max-md:px-5">
      <div className="flex flex-col items-start w-full max-w-[1402px] max-md:max-w-full">
        <Header />
        <Content />
        <Divider />
      </div>
    </main>
  );
};

export default MyComponent;
