import React from "react";

const About = () => {
  return (
    <div
      name="about me"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl ">

        </p>

        <br />

        <p className="text-xl w-[650px]">
          My name is Ilyasbek Abdujabborov,
          I live in Namangan, Uzbekistan
          I Love Programming. Currently I have 1 year of experience. I currently know Html, Css, Javascript, React js, Node js
        </p>
      </div>
    </div>
  );
};

export default About;
