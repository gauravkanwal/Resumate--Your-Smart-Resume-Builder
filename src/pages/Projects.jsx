import { React, useState } from "react";
import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router";
import { MdDelete } from "react-icons/md";

function Projects() {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    liveLink: "",
    githubLink: "",
    id: Date.now(),
  });
  const { resumeData, setResumeData } = useResume();

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, newProject],
    });
    setNewProject({
      name: "",
      description: "",
      liveLink: "",
      githubLink: "",
      id: Date.now(),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({
      ...newProject,
      [name]: value,
    });
  };

  const deleteProject = (id) => {
    const updatedArr = resumeData.projects.filter((obj) => obj.id !== id);
    setResumeData({
      ...resumeData,
      projects: updatedArr,
    });
  };
   const Navigate=useNavigate();
  return (
    <div className="md:w-250 border-2 border-amber-50 p-5 md:px-60 bg-white shadow-2xl md:rounded-xl">
      {/* already added projects: */}
      {resumeData.projects.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-4">Projects Details:</h2>
          <div className="md:flex gap-10 flex-wrap">
            {resumeData.projects.map((obj) => (
              <div key={obj.id} className="mb-4">
                <p>
                  <strong>Project Name:</strong> {obj.name}
                </p>
                <p>
                  <strong>Description:</strong> {obj.description}
                </p>
                <div className="flex flex-col text-[var(--blue)]">
                  <a
                    href={obj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Link
                  </a>
                  <a
                    href={obj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Link
                  </a>
                </div>
                <button
                  onClick={() => deleteProject(obj.id)}
                  className="text-3xl cursor-pointer text-[var(--blue)] mt-4"
                >
                  <MdDelete />
                </button>
              </div>
            ))}
            <hr className="text-blue-400 mt-5 mb-5" />
          </div>
        </>
      )}

      <div>
        <h2 className="text-xl font-bold mb-4">Add Projects</h2>
        <form className="inputForm" onSubmit={handleSubmit}>
          <div className="inputDiv">
            <label htmlFor="name" className="inputLabel">
              Project Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              placeholder="Enter Project Name"
              onChange={handleChange}
              value={newProject.name}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="summary" className="inputLabel">
              Project Description:
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              value={newProject.description}
              className="input"
              placeholder="Write a brief description about your project"
              rows="5"
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="liveLink" className="inputLabel">
              Live Link:
            </label>
            <input
              type="text"
              id="liveLink"
              name="liveLink"
              className="input"
              placeholder="Enter Live Link of Project "
              onChange={handleChange}
              value={newProject.liveLink}
            />
          </div>
          <div className="inputDiv">
            <label htmlFor="githubLink" className="inputLabel">
              GitHub Link:
            </label>
            <input
              type="text"
              id="githubLink"
              name="githubLink"
              className="input"
              placeholder="Enter Github Link of Project "
              onChange={handleChange}
              value={newProject.githubLink}
            />
          </div>
          <button type="submit" className="submitButton">
            Add
          </button>
        </form>
      </div>
      <div className="flex justify-between mt-5 md:mt-10">
        <button className="submitButton" onClick={() => Navigate("/experience")}>
          {"<-"} Prev
        </button>
        <button className="submitButton" onClick={() => Navigate("/preview")}>
          Next {"->"}
        </button>
      </div>
    </div>
  );
}

export default Projects;
