import React from "react";
import user from "../assets/user1.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Hi 👋 I'm a Full Stack Developer 👨‍💻
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Node JS and Javascript.
          </p>

          <div>
            <Link
              to="website"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Website
              <span className="group-hover:rotate-90 duration-300">
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={user}
            alt="my profile"
            className="rounded-2xl h-[400px] mx-auto w-[400px] md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
