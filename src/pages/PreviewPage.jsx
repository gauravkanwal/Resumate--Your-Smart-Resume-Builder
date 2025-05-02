import React from "react";
import Preview from "./Preview";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF } from "../components";
import { useResume } from "../context/ResumeContext";

function PreviewPage() {
  const { resumeData } = useResume();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-5">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        🎉 Yay! Your Resume is Ready to Download
      </h2>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <Preview />
      </div>

      <PDFDownloadLink
        document={<ResumePDF resumeData={resumeData} />}
        fileName="resume-by-Resumate.pdf"
        className="mt-6 px-6 py-3 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        {({ loading }) => (loading ? "Generating PDF..." : "Download Resume")}
      </PDFDownloadLink>
    </div>
  );
}

export default PreviewPage;
