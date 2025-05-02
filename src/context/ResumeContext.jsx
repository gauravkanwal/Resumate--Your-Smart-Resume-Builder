import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(()=>{
    const savedData=localStorage.getItem("resumeData");
    return savedData
    ?JSON.parse(savedData)
    :{
    personal: {
      name: "",
      role: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
  }});

  useEffect(()=>{
    localStorage.setItem("resumeData",JSON.stringify(resumeData));
  },[resumeData]);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
