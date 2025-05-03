import React from "react";
import ResetButton from "./ResetButton";
import { FaGithub, FaEnvelope, FaHome, FaFileAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Reset Section */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Reset Your Resume</h2>
          <p className="text-gray-400 mb-4">
            Start fresh by clearing all the data you've entered.
          </p>
          <ResetButton />
        </div>

        {/* Brand Section */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Resumate</h2>
          <p className="text-gray-400">
            Smart. Simple. Stunning. Build your resume effortlessly with
            Resumate.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaHome />
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaFileAlt />
              <a href="/personal-info" className="hover:underline">
                Build Resume
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaFileAlt />
              <a href="/preview" className="hover:underline">
                Preview
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Connect</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:kanwalgk25@gmail.com" className="hover:underline">
                kanwalgk25@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub />
              <a
                href="https://github.com/gauravkanwal/Resumate--Your-Smart-Resume-Builder.git"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Resumate
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-400 text-xs">
        © {new Date().getFullYear()} Resumate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;