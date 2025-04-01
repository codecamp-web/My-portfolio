

import transparent from "../images/transparent.jpg";

const About = () => {
  return (
    <div className="pt-36 text-white md:ml-20 ">
      {/* Section Title */}
      <div className="flex items-center gap-x-5">
        <div className="text-lg md:text-3xl font-bold">
          <span className="pr-1 text-green-400 font-mono">{"> "}01.</span> About Me
        </div>
        <div className="w-30 md:w-72 h-0.5 bg-white"></div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-5 mt-10">
        <div className="text-xs md:text-sm col-span-2 text-gray-400 tracking-widest
         leading-relaxed text-justify">
          <p>
            Hey there! I'm Edward Ogheneochuko, a passionate Frontend Engineer with expertise in
            building dynamic, user-friendly web applications. With a strong foundation in HTML,
            CSS, and JavaScript, I specialize in modern frontend frameworks like React.js to create
            seamless, high-performance user interfaces.
          </p>
          <p className="py-3">
            My focus is on developing intuitive, accessible, and responsive designs that enhance
            user experience. I also integrate AI-powered functionalities to create smarter, more
            interactive applications. With a keen eye for detail and a problem-solving mindset, I
            ensure scalability, efficiency, and error handling in every project. I thrive on
            innovation, constantly exploring new technologies and best practices to stay ahead in
            the evolving world of frontend development. Let’s build something amazing together!
          </p>

          {/* Technologies Section */}
          <div>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="flex gap-x-10 mt-5">
              <div>
                <ol className="list-none space-y-2">
                  <li> <span className="text-green-400">{">"}</span> CSS</li>
                  <li><span className="text-green-400">{">"}</span> Redux</li>
                  <li><span className="text-green-400">{">"}</span> React</li>
                  <li><span className="text-green-400">{">"}</span> Tailwind</li>
                </ol>
              </div>
              <div>
                <ol className="list-none space-y-2">
                  <li><span className="text-green-400">{">"}</span> JavaScript</li>
                  <li><span className="text-green-400">{">"}</span> Material UI</li>
                  <li><span className="text-green-400">{">"}</span> Chakra UI</li>
                  <li><span className="text-green-400">{">"}</span> Shadcn UI</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex w-[200px] md:w-[300px] mx-auto rotate-0 
        hover:rotate-12 hover:w-[300px] duration-300 transition">
          <img src={transparent} alt="Edward Ogheneochuko" 
               className="rounded-lg shadow-lg"
               loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default About;
