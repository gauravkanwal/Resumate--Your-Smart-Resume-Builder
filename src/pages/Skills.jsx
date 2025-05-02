import React, { useState } from "react";
import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router";
import { RxCross2 } from "react-icons/rx";

function Skills() {
  const { resumeData, setResumeData } = useResume();
  const Navigate = useNavigate();
  const [newSkill, setNewSkill] = useState("");
  const addSkill = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    if (newSkill.trim() === "") return; // Prevent adding empty skills

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill], // Create a new array
    });

    setNewSkill(""); // Clear the input field
  };

  const removeSkill = (index) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  return (
    <div className="md:w-250 border-2 min-h-100 md:min-h-150 flex flex-col justify-between border-amber-50 p-5 md:px-60 bg-white shadow-2xl md:rounded-xl">
      <div>
        <div>
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <form className="inputForm">
            <div className="inputDiv flex gap-5">
              <input
                type="text"
                className="input"
                value={newSkill}
                placeholder="Add a skill"
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button onClick={addSkill} className="submitButton">
                Add
              </button>
            </div>
          </form>
        </div>

        {resumeData.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-2"
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(index)}
                  className="text-white font-bold cursor-pointer hover:text-black"
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-between mt-5 md:mt-10">
        <button className="submitButton" onClick={() => Navigate("/education")}>
          {"<-"} Prev
        </button>
        <button
          className="submitButton"
          onClick={() => Navigate("/experience")}
        >
          Next {"->"}
        </button>
      </div>
    </div>
  );
}

export default Skills;
