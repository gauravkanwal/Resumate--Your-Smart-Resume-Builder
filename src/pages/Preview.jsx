import React from "react";
import { useResume } from "../context/ResumeContext";

function Preview() {
  const { resumeData } = useResume();

  return (
    <div
      id="resume-preview"
      className="w-[595px] min-h-[842px] overflow-y-scroll bg-white p-5 font-serif text-black border border-gray-300 mx-auto"
    >
      {/* Header Section */}
      <div className="">
        <h1
          className="text-2xl font-bold text-center
        "
        >
          {resumeData.personal.name}
        </h1>
        <p className="text-center text-sm text-gray-500">
          {resumeData.personal.role}
        </p>
        <div className="flex text-gray-500 text-[0.75rem] flex-wrap justify-center">
          <p>
            {resumeData.personal.email} <b className="text-black">•</b>&nbsp;
          </p>
          <p>
            {" "}
            {resumeData.personal.phone} <b className="text-black">•</b>&nbsp;
          </p>
          <p>
            {" "}
            {resumeData.personal.website} <b className="text-black">•</b>&nbsp;
          </p>
          <p> {resumeData.personal.address} </p>
        </div>
      </div>

      {/* Summary Section */}
      {resumeData.personal.summary && (
        <div className="pb-2 mt-4">
          <h2 className="text-lg text-center font-bold">Summary</h2>
          <hr />
          <p className="text-[0.85rem] mt-2 text-gray-500">
            {resumeData.personal.summary}
          </p>
        </div>
      )}

      {/* Education Section */}
      {resumeData.education.length > 0 && (
        <div className="pb-2 mt-4">
          <h2 className="text-lg text-center font-bold">Education</h2>
          <hr />
          <div className="mt-2 text-sm">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="mb-2 flex justify-between">
                <div>
                  <p className="">{edu.degree}</p>
                  <p className="text-gray-500">{edu.institute}</p>
                </div>
                <p className="text-gray-500 text-[0.85rem">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience Section */}
      {resumeData.experience.length > 0 && (
        <div className="pb-2 mt-4">
          <h2 className="text-lg text-center font-bold">Experience</h2>
          <hr />
          <div className="mt-2 text-sm flex flex-col gap-2">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <div className="mb-2 flex justify-between">
                  <div>
                    <p className="">{exp.role}</p>
                    <p className="text-gray-500">{exp.institute}</p>
                  </div>
                  <p className="text-gray-500 text-[0.85rem]">
                    {exp.startYear} - {exp.endYear}
                  </p>
                </div>

                <p className="text-[0.8rem] text-gray-500">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {resumeData.skills.length > 0 && (
        <div className="border-gray-300 pb-2 mt-5">
          <h2 className="text-lg text-center font-bold">Skills</h2>
          <hr />
          <div className="mt-2 flex text-sm text-gray-500 flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span key={index}>
                &nbsp;<b className="text-black">•</b>&nbsp;
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {resumeData.projects.length > 0 && (
        <div className="mt-5">
          <h2 className="text-lg text-center font-bold">Projects</h2>
          <hr />
          <ul className="mt-2 text-sm">
            {resumeData.projects.map((proj) => (
              <li key={proj.id} className="mb-2">
                <p className="font-bold">{proj.name}</p>
                <p className="text-gray-500 text-[0.8rem]">
                  {proj.description}
                </p>
                <div className="mt-1">
                  {proj.liveLink && (
                    <p className="text-gray-700">
                      Live Link:{" "}
                      <span className="text-gray-500">{proj.liveLink}</span>
                    </p>
                  )}
                  {proj.githubLink && (
                    <p className="text-gray-700">
                      GitHub Link:{" "}
                      <span className="text-gray-500">{proj.githubLink}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Preview; //is there any okLch colore? 