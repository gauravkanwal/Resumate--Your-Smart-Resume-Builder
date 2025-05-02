import React from "react";
import Preview from "./Preview";
import { exportPDF } from "../utils/pdfExporter";
function PreviewPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  py-5">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        🎉 Yay! Your Resume is Ready to Download
      </h2>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg">
        <Preview/>
      </div>
      <button
        className="mt-6 px-6 py-3 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        onClick={() => exportPDF("resume-preview")} // Example: Trigger print/download
      >
        Download Resume
      </button>
    </div>
  );
}

export default PreviewPage;