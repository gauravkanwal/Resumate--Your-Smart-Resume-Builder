import { useState, React } from "react";
import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router";
import { MdDelete } from "react-icons/md";

function Education() {
  const { resumeData, setResumeData } = useResume();

  const [newEducation, setNewEducation] = useState({
    degree: "",
    institute: "",
    startYear: "",
    endYear: "",
    id: Date.now(), // Use a unique identifier
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEducation({
      ...newEducation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
    setNewEducation({
      degree: "",
      institute: "",
      startYear: "",
      endYear: "",
      id: Date.now(), // Generate a new unique ID
    });
  };

  const deleteEducation = (id) => {
    const updatedArr = resumeData.education.filter((obj) => obj.id !== id);
    setResumeData({
      ...resumeData,
      education: updatedArr,
    });
  };

  return (
    <div className="md:w-250 border-2 border-amber-50 p-5 md:px-60 bg-white shadow-2xl md:rounded-xl">
      {resumeData.education.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-4">Education Details:</h2>
          <div className="md:flex gap-10 flex-wrap">
            {resumeData.education.map((obj) => (
              <div key={obj.id} className="mb-4">
                <p>
                  <strong>Degree:</strong> {obj.degree}
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
                <button
                  onClick={() => deleteEducation(obj.id)}
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
        <h2 className="text-xl font-bold mb-4">Add Education Information</h2>

        <form className="inputForm" onSubmit={handleSubmit}>
          {/* Degree */}
          <div className="imputDiv">
            <label className="inputLabel" htmlFor="degree">
              Degree:
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={newEducation.degree}
              onChange={handleChange}
              className="input border border-gray-300 rounded-md p-2"
              placeholder="Enter Degree name"
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
              value={newEducation.institute}
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
              value={newEducation.startYear}
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
              type="number"
              id="endYear"
              name="endYear"
              value={newEducation.endYear}
              onChange={handleChange}
              className="input border border-gray-300 rounded-md p-2"
              placeholder="Enter End Year"
            />
          </div>

          <button type="submit" className="submitButton">
            Add
          </button>
        </form>
      </div>

      <div className="flex justify-between mt-5 md:mt-10">
        <button
          className="submitButton"
          onClick={() => Navigate("/personal-info")}
        >
          {"<-"} Prev
        </button>
        <button className="submitButton" onClick={() => Navigate("/skills")}>
          Next {"->"}
        </button>
      </div>
    </div>
  );
}

export default Education;