import React from "react";
import { certifications } from "../components/data";
import { FaGithub } from "react-icons/fa";

const Works = () => {
  return (
    <div className="pb-36 text-white md:ml-20">
      {/* Section Title */}
      <div className="flex items-center gap-x-5">
        <div className="text-lg md:text-3xl font-bold">
          <span className="pr-1 text-green-400 font-mono">{"> "}03.</span>
          Some Things I've Worked on
        </div>
        <div className="w-40 md:w-72 h-0.5 bg-white"></div>
      </div>

      {/* Certifications List */}
      <div className="mt-10 space-y-10">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`relative flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center md:items-start p-4`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 lg:w-1/3">
              <img
                src={cert.image}
                alt="Certification"
                className="w-full object-cover md:-mr-10 lg:-mr-16"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="rounded-md shadow-lg p-6 md:w-1/2 lg:w-2/3 z-10 text-gray-600">
              <p className="text-sm sm:text-lg font-semibold">{cert.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub Section */}
      <div className="text-center mt-[40px] gap-y-7 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-widest">Checkout my Github</h1>
        <p className="text-gray-400 text-base max-w-[550px]">
          For some of my other projects and infrastructures that I've had the
          opportunity to work on, you can find them on my GitHub.
        </p>
        <a href="https://github.com/codecamp-web">
          <FaGithub fontSize={30} />
        </a>
      </div>
    </div>
  );
};

export default Works;
