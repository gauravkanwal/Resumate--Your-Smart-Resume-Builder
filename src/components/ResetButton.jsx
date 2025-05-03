import React from "react";
import { useResume } from "../context/ResumeContext";

function ResetButton() {
  const { setResumeData } = useResume();

  const handleReset = () => {
    // Reset state to initial values
    const initialState={
      personal: {
        name: "",
        role: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        summary: "",
      },
      education: [],
      experience: [],
      skills: [],
      projects: [],
    };

    // Clear localStorage if used
    setResumeData(initialState);
    localStorage.clear();
  };

  return (
    <button
      onClick={handleReset}
      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-400 transition cursor-pointer duration-300"
    >
      Reset
    </button>
  );
}

export default ResetButton;