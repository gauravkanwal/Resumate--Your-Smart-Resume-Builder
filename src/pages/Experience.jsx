import { useState, React } from "react";
import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router";
import { MdDelete } from "react-icons/md";

function Experience() {
  const { resumeData, setResumeData } = useResume();

  const [newExperience, setNewExperience] = useState({
    institute: "",
    role: "",
    startYear: "",
    endYear: "",
    summary: "",
    id: Date.now(), // Use a unique identifier
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({
      ...newExperience,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExperience],
    });
    setNewExperience({
      institute: "",
      role: "",
      startYear: "",
      endYear: "",
      summary: "",
      id: Date.now(), // Reset with a unique identifier
    });
  };

  const deleteExperience = (id) => {
    const updatedArr = resumeData.experience.filter((obj) => obj.id !== id);
    setResumeData({
      ...resumeData,
      experience: updatedArr,
    });
  };

  return (
    <div className="md:w-250 border-2 border-amber-50 p-5 md:px-60 bg-white shadow-2xl md:rounded-xl">
      {resumeData.experience.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-4">Experience Details:</h2>
          <div className="md:flex gap-10 flex-wrap">
            {resumeData.experience.map((obj) => (
              <div key={obj.id} className="mb-4">
                <p>
                  <strong>Role:</strong> {obj.role}
                </p>
                <p>
                  <strong>Institute:</strong> {obj.institute}
                </p>
                <p>
                  <strong>Start Year:</strong> {obj.startYear}
                </p>
                <p>
                  <strong>End Year:</strong> {obj.endYear}
                </p>
                <p>
                  <strong>Summary:</strong> {obj.summary}
                </p>
                <button
                  onClick={() => deleteExperience(obj.id)}
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
      {
        console.log(resumeData.experience)
      }
      <div>
        <h2 className="text-xl font-bold mb-4">Add Experience</h2>

        <form className="inputForm" onSubmit={handleSubmit}>
          {/* Role */}
          <div className="imputDiv">
            <label className="inputLabel" htmlFor="role">
              Role:
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={newExperience.role}
              onChange={handleChange}
              className="input border border-gray-300 rounded-md p-2"
              placeholder="Enter Role name"
            />
          </div>

          {/* Institute Name */}
          <div className="imputDiv">
            <label className="inputLabel" htmlFor="institute">
              Institute Name:
            </label>
            <input
              type="text"
              id="institute"
              name="institute"
              value={newExperience.institute}
              onChange={handleChange}
              className="input border border-gray-300 rounded-md p-2"
              placeholder="Enter Institute name"
            />
          </div>

          {/* Start Year */}
          <div className="imputDiv">
            <label className="inputLabel" htmlFor="startYear">
              Start Year:
            </label>
            <input
              type="number"
              id="startYear"
              name="startYear"
              value={newExperience.startYear}
              onChange={handleChange}
              className="input border border-gray-300 rounded-md p-2"
              placeholder="Enter Start Year"
            />
          </div>

          {/* End Year */}
          <div className="imputDiv">
            <label className="inputLabel" htmlFor="endYear">
              End Year:
            </label>
            <input
              type="text"
              id="endYear"
              name="endYear"
              value={newExperience.endYear}
              onChange={handleChange}
              className="input border border-gray-300 rounded-md p-2"
              placeholder="Enter End Year"
            />
          </div>

          {/* Summary */}
          <div className="imputDiv">
            <label className="inputLabel" htmlFor="summary">
              Summary:
            </label>
            <textarea
              id="summary"
              name="summary"
              value={newExperience.summary}
              onChange={handleChange}
              className="input"
              placeholder="Write a brief summary about your role"
              rows="5"
            />
          </div>

          <button type="submit" className="submitButton">
            Add
          </button>
        </form>
      </div>

      <div className="flex justify-between mt-5 md:mt-10">
        <button className="submitButton" onClick={() => Navigate("/skills")}>
          {"<-"} Prev
        </button>
        <button className="submitButton" onClick={() => Navigate("/projects")}>
          Next {"->"}
        </button>
      </div>
    </div>
  );
}

export default Experience;