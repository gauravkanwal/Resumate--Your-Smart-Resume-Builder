import React, { useState,useEffect } from "react";
import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router";

function PersonalInfo() {
  const { resumeData, setResumeData } = useResume();

  // Local state to manage form inputs
  const [personalInfo, setPersonalInfo] = useState({
    name: resumeData.personal.name,
    role: resumeData.personal.role,
    email: resumeData.personal.email,
    phone: resumeData.personal.phone,
    address: resumeData.personal.address,
    website: resumeData.personal.website,
    summary: resumeData.personal.summary,
  });

    // Synchronize local state with context when resumeData changes
    useEffect(() => {
      setPersonalInfo({
        name: resumeData.personal.name,
        role: resumeData.personal.role,
        email: resumeData.personal.email,
        phone: resumeData.personal.phone,
        address: resumeData.personal.address,
        website: resumeData.personal.website,
        summary: resumeData.personal.summary,
      });
    }, [resumeData]);
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value, // Dynamically update the field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setResumeData({
      ...resumeData,
      personal: personalInfo, // Update the personal field in context
    });
    // alert("Personal information saved!");
  };

  const Navigate=useNavigate();

  return (
    <div className="md:w-250 border-2 border-amber-50 p-5 md:px-60 bg-white shadow-2xl md:rounded-xl">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>

      <form onSubmit={handleSubmit} className="inputForm">
        {/* Name */}
        <div className="imputDiv">
          <label className="inputLabel" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={personalInfo.name}
            onChange={handleChange}
            className="input border border-gray-300 rounded-md p-2"
            placeholder="Enter your name"
          />
        </div>

        {/* Role */}
        <div className="imputDiv">
          <label className="inputLabel" htmlFor="role">
            Role:
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={personalInfo.role}
            onChange={handleChange}
            className="input border border-gray-300 rounded-md p-2"
            placeholder="Enter your role (e.g., Software Engineer)"
          />
        </div>

        {/* Email */}
        <div className="imputDiv">
          <label className="inputLabel" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalInfo.email}
            onChange={handleChange}
            className="input border border-gray-300 rounded-md p-2"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div className="imputDiv">
          <label className="inputLabel" htmlFor="phone">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={personalInfo.phone}
            onChange={handleChange}
            className="input border border-gray-300 rounded-md p-2"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address */}
        <div className="imputDiv">
          <label className="inputLabel" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={personalInfo.address}
            onChange={handleChange}
            className="input border border-gray-300 rounded-md p-2"
            placeholder="Enter your address"
          />
        </div>

        {/* Website */}
        <div className="imputDiv">
          <label className="inputLabel" htmlFor="website">
            Website:
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={personalInfo.website}
            onChange={handleChange}
            className="input border border-gray-300 rounded-md p-2"
            placeholder="Enter your website or portfolio link"
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
            value={personalInfo.summary}
            onChange={handleChange}
            className="input"
            placeholder="Write a brief summary about yourself"
            rows="4"
          />
        </div>
        <button type="submit" className="submitButton">
          Save
        </button>
        
        <div className="flex justify-between">
        <button className="submitButton" onClick={()=>Navigate("/")}>
          {'<-'} Home
        </button>
        <button className="submitButton" onClick={()=>Navigate("/education")}>
          Next {'->'}
        </button>

        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;