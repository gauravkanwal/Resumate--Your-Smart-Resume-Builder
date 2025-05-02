import React from "react";
import { CardCollection } from "../components";
import { useNavigate } from "react-router";
function Home() {
  const Navigate=useNavigate();
  return (
    <div className="text-white flex flex-col gap-5 md:gap-10">
      <h2 className="text-center text-2xl font-bold md:text-4xl  ">
        {" "}
        <span className="md:font-extrabold underline underline-offset-8">
          Welcome to Resumate
        </span>{" "}
        — Your Smart Resume Builder
      </h2>
      <div className="md:flex md:justify-center md:gap-50 md:items-center md:mt-3">
      <div className="flex flex-col items-center md:gap-10 gap-5">
      <p className="text-lg text-center text-[var(--off-white)]  md:text-wrap md:w-80">
        Build stunning, job-ready resumes in minutes with Resumate. Whether
        you're a fresher or a seasoned professional, Resumate makes resume
        creation effortless with intuitive design and real-time preview. No more
        struggling with formatting or outdated templates — just focus on your
        content, and we’ll take care of the rest.
      </p>
      <button className="cursor-pointer shadow-5xl py-4 px-8 rounded-xl text-xl font-semibold border-2 border-transparent hover:border-white hover:border-2 hover:bg-[var(--light-blue)] bg-[var(--blue)]"
      onClick={()=>Navigate("/personal-info")}
      >Start Now -{`>`} </button>
      </div>
      <div
        className="w-full h-100 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg md:w-100"
        style={{
          backgroundImage: 'url("/heroImage.png")', 
        }}
      ></div>
      </div>
      <h3 className="text-xl font-bold md:text-3xl text-center underline underline-offset-10">
         What you get:
      </h3>
      <CardCollection />
    </div>
  );
}

export default Home;
