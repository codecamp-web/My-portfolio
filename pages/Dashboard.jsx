


const Dashboard = () => {
  return (
    <div className="pt-55 ">
      <div className="flex flex-col gap-y-6 sm:gap-y-7">
        <h6 className="tracking-widest text-amber-300">Hi, my name is</h6>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider">
          Edward Ogheneochuko.
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-neutral-300">
          I do things like this for a Living
        </h1>
        <span className="tracking-wider text-sm md:text-lg text-justify text-gray-400">
          I’m a Frontend Engineer passionate about building dynamic,{" "}
          <span className="text-amber-400">user-friendly web applications.</span>{" "}
          I focus on creating responsive, intuitive, and scalable interfaces.
          I thrive on <span className="text-amber-400">problem-solving</span> and
          innovation, always exploring new technologies to enhance user experiences.
        </span>
        <p
          className="border text-md w-50 p-5 border-amber-300 text-amber-300 
        hover:bg-neutral-700 cursor-pointer rounded-md"
        >
          <a
            href="https://drive.google.com/file/d/1ExKz7QqVe_TQPXfYOI99ha9u5lRaa3hd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            Check out my resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;


