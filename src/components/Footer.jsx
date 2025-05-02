import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h2 className="font-semibold text-lg mb-2">Resumate</h2>
          <p>Smart. Simple. Stunning. Build your resume effortlessly.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
          <ul className="md:flex md:gap-5">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/personal-info" className="hover:underline">
                Build Resume
              </a>
            </li>
            <li>
              <a href="/preview" className="hover:underline">
                Preview
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Connect</h2>
          <ul className="md:flex md:gap-5">
            <li>
              <a href="mailto:kanwalgk25@gmail.com" className="hover:underline">
                kanwalgk25@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gauravkanwal/Resumate--Your-Smart-Resume-Builder.git"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400">
        © {new Date().getFullYear()} Resumate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
