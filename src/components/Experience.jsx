const Experience = () => {
  return (
    <div className="py-10 bg-[#232325]" id="experience">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experience</span>
      </h2>


      <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
        <p>Wolkite University</p>
        <p className="text-gray-400">(2023 - present)</p>
        <p className="text-gray-500">
          At Wolkite University I have been working on Community School Management System
        </p>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>


      <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
        <p>INSA</p>
        <p className="text-gray-400">(2024 - present)</p>
        <p className="text-gray-500">
          At this organization I have been working my internship on HR system.
        </p>
      </div>
    </div>
  );
};

export default Experience;
