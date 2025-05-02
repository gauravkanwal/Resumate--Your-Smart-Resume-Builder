import React, { useState } from "react";
import { NavLink } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [showNavigation, setShowNavigation] = useState(false);
  return (
    <div className="bg-[var(--black)] md:h-25">
      <div className="w-full flex justify-between px-10 py-4 md:p-8 text-white md:items-center h-full md:justify-evenly md:gap-4 md:px-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-[var(--blue)]" : "text-gray-400"
            } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[var(--active-color)] lg:p-0`
          }
          style={{
            backgroundImage: "url('/ResumateLogo.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "100px",
            height: "100px",
          }}
        >
          {/* Empty content since the background image is used */}
        </NavLink>
        <div className="flex flex-col md:flex-row md:w-full md:justify-evenly justify-center md:ml-10">
          <div className="md:hidden w-full flex justify-end">
            {!showNavigation ? (
              <HiMiniBars3
                className="w-7 h-7"
                onClick={() => setShowNavigation(true)}
              />
            ) : (
              <RxCross2
                className="w-7 h-7"
                onClick={() => setShowNavigation(false)}
              />
            )}
          </div>
          <div className={`${showNavigation?"flex flex-col":"hidden"} md:flex md:w-full md:justify-evenly`}>
            <NavLink
              to="/personal-info"
              className={({ isActive }) =>
                `flex py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[var(--blue)]" : "text-gray-400"
                } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[var(--active-color)] lg:p-0`
              }
            >
              Personal Information
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `flex py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[var(--blue)]" : "text-gray-400"
                } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[var(--active-color)] lg:p-0`
              }
            >
              Education
            </NavLink>
            <NavLink
              to="skills"
              className={({ isActive }) =>
                `flex py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[var(--blue)]" : "text-gray-400"
                } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[var(--active-color)] lg:p-0`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="experience"
              className={({ isActive }) =>
                `flex py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[var(--blue)]" : "text-gray-400"
                } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[var(--active-color)] lg:p-0`
              }
            >
              Experience
            </NavLink>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                `flex py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[var(--blue)]" : "text-gray-400"
                } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[var(--active-color)] lg:p-0`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="preview"
              className={({ isActive }) =>
                `flex py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[var(--blue)]" : "text-gray-400"
                } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[var(--active-color)] lg:p-0`
              }
            >
              Preview
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
